import { selector } from 'recoil';
import { socialsState } from './atoms';
import {Socials} from '../interfaces/CommonDatas'

export const socialsSelector = selector({
  key: 'socialsSelector',
  get: ({ get }) => {
    return get<Socials[]>(socialsState);
  },
});