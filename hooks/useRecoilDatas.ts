import { useCallback, useMemo, useState, useEffect } from 'react';
import {useRouter } from 'next/router';
import {getSocials, getCitites} from '../utils/getCommonDatas' 
import {Socials, Cities, Regions} from '../interfaces/CommonDatas'
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
  pageLoader: boolean;
}

const useRecoilDatas = (): LocaleHook => {
  
  // hooks
  const {divideArrayIntoChunks} = useRecursion();

  // states
  const [cityDesktopData, setCityDesktopData] = useState<Cities[][]>([]);
  const [cityMobileData, setCityMobileData] = useState<Cities[][]>([]);
  const [regionDesktopData, setRegionDesktopData] = useState<Regions[][]>([]);
  const [regionMobileData, setRegionMobileData] = useState<Regions[][]>([]);
  const [pageLoaderState, setPageLoaderState] = useState<boolean>(true);

  // atoms
  const [socials, setSocials] = useRecoilState<Socials[]>(socialsState);
  const [cities, setCities] = useRecoilState<Cities[]>(citiesState);

  // selectors
  const socialsData = useRecoilValue<Socials>(socialsSelector);
  const cityData = useRecoilValue<Cities[]>(citiesSelector);
  const regionData = useRecoilValue<Regions[]>(regionsSelector);

  // functions
  const recoilGetSocials = async (): Promise<void> => { setSocials(await getSocials()); }
  const recoilGetCities = async (): Promise<void> => setCities(await getCitites());

  useEffect(() => {
    setCityDesktopData(divideArrayIntoChunks(cities, 20));
    setCityMobileData(divideArrayIntoChunks(cities, 50));
    setRegionDesktopData(divideArrayIntoChunks(regionData, 3));
    setRegionMobileData(divideArrayIntoChunks(regionData, 8));
    setTimeout(() => { setPageLoaderState(false); }, 1000)
  }, [cityData])
  
  return { recoilGetSocials, recoilGetCities, socialsData, cityData, regionData, cityDesktopData, cityMobileData, regionDesktopData, regionMobileData, pageLoader: pageLoaderState };

};

export default useRecoilDatas;
