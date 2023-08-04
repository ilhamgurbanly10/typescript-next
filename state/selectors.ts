import { selector } from 'recoil';
import { socialsState, modeState, citiesState, pageLoaderState } from './atoms';
import {Socials, Cities, Regions} from '../interfaces/CommonDatas'

export const pageLoaderSelector = selector({
  key: 'pageLoaderSelector',
  get: ({ get }) => {
    return get<boolean>(pageLoaderState);
  },
});

export const socialsSelector = selector({
  key: 'socialsSelector',
  get: ({ get }) => {
    const socials = get<Socials[]>(socialsState);
    return socials?.length > 0 ? socials[0] : {};
  },
});

export const modeSelector = selector({
  key: 'modeSelector',
  get: ({ get }) => {
    return get<string>(modeState);
  },
});

export const citiesSelector = selector({
  key: 'citiesSelector',
  get: ({ get }) => {
    return get<Cities[]>(citiesState);
  },
});

export const regionsSelector = selector({
  key: 'regionsSelector',
  get: ({ get }) => {
    const cities: Cities[] =  get<Cities[]>(citiesState);
    const city: Cities[] = cities.filter((item) => { return item.slug == "baki"});
    return city?.length > 0 ? city[0].district : [];
  },
});