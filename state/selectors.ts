import { selector } from 'recoil';
import { socialsState, modeState } from './atoms';
import {Socials} from '../interfaces/CommonDatas'

export const socialsSelector = selector({
  key: 'socialsSelector',
  get: ({ get }) => {
    return get<Socials[]>(socialsState);
  },
});

export const modeSelector = selector({
  key: 'modeSelector',
  get: ({ get }) => {
    return get<string>(modeState);
  },
});