import { useCallback, useMemo, useState, useEffect } from 'react';
import {useRouter } from 'next/router';
import {getSocials, getCitites} from '../utils/getCommonDatas' 
import {Socials, Cities, Regions, Loader} from '../interfaces/CommonDatas'
import { useRecoilState, useRecoilValue } from 'recoil';
import { socialsState, citiesState, pageLoaderState } from '../state/atoms';
import { socialsSelector, citiesSelector, regionsSelector, pageLoaderSelector } from '../state/selectors';
import useRecursion from '../hooks/useRecursion';

interface Locale {
  value: string;
  name: string;
  disabled: boolean;
}

export interface LocaleHook {
  recoilGetSocials: () => void;
  recoilGetCities: () => void;
  socialsData: Socials;
  cityData: Cities[];
  regionData: Regions[];
  cityDesktopData: Cities[][];
  cityMobileData: Cities[][];
  regionDesktopData: Regions[][];
  regionMobileData: Regions[][];
  pageLoader: Loader;
}

const useRecoilDatas = (): LocaleHook => {
  
  const apisLength = Number(process.env.NEXT_PUBLIC_APIS_LENGTH);
  
  // hooks
  const {divideArrayIntoChunks} = useRecursion();

  // states
  const [cityDesktopData, setCityDesktopData] = useState<Cities[][]>([]);
  const [cityMobileData, setCityMobileData] = useState<Cities[][]>([]);
  const [regionDesktopData, setRegionDesktopData] = useState<Regions[][]>([]);
  const [regionMobileData, setRegionMobileData] = useState<Regions[][]>([]);

  // atoms
  const [pageLoader, setPageLoader] = useRecoilState<Loader>(pageLoaderState);
  const [socials, setSocials] = useRecoilState<Socials[]>(socialsState);
  const [cities, setCities] = useRecoilState<Cities[]>(citiesState);

  // selectors
  const socialsData = useRecoilValue<Socials>(socialsSelector);
  const cityData = useRecoilValue<Cities[]>(citiesSelector);
  const regionData = useRecoilValue<Regions[]>(regionsSelector);

  // functions
  const recoilGetSocials = async (): Promise<void> => { 
    setSocials(await getSocials()); 
    setPageLoader(prevPageLoader => ({ ...prevPageLoader, loop: prevPageLoader.loop + 1, percent: Math.floor(prevPageLoader.percent + (100 / apisLength)) }))
  }
  
  const recoilGetCities = async (): Promise<void> => { 
    setCities(await getCitites());
    setPageLoader(prevPageLoader => ({ ...prevPageLoader, loop: prevPageLoader.loop + 1, percent: Math.floor(prevPageLoader.percent + (100 / apisLength)) }))
  }

  useEffect(() => {
    setCityDesktopData(divideArrayIntoChunks(cities, 20));
    setCityMobileData(divideArrayIntoChunks(cities, 50));
    setRegionDesktopData(divideArrayIntoChunks(regionData, 3));
    setRegionMobileData(divideArrayIntoChunks(regionData, 8));
  }, [cityData])

  useEffect(() => {
    if (pageLoader.loop == apisLength) { setTimeout(() => { setPageLoader({...pageLoader, state: false }); }, 200) }
  }, [pageLoader.loop]);
  
  return { recoilGetSocials, recoilGetCities, socialsData, cityData, regionData, cityDesktopData, cityMobileData, regionDesktopData, regionMobileData, pageLoader };

};

export default useRecoilDatas;
