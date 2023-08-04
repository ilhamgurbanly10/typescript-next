import { atom } from 'recoil';
import {Socials, Cities} from '../interfaces/CommonDatas'

export const pageLoaderState = atom<boolean>({
  key: 'pageLoaderState',
  default: true,
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