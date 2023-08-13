import { atom } from 'recoil';
import {Socials, Cities, Loader} from '../interfaces/CommonDatas'

export const pageLoaderState = atom<Loader>({
  key: 'pageLoaderState',
  default: {
    state: true,
    loop: 0,
    percent: 0
  },
});

export const socialsState = atom<Socials[]>({
  key: 'socialsState',
  default: [],
});

export const modeState = atom<string>({
  key: 'modeState',
  default: 'light',
});

export const citiesState = atom<Cities[]>({
  key: 'citiesState',
  default: [],
});