import { atom } from 'recoil';
import {Socials} from '../interfaces/CommonDatas'

export const socialsState = atom<Socials[]>({
  key: 'socialsState',
  default: [],
});

export const modeState = atom<string>({
  key: 'modeState',
  default: 'light',
});