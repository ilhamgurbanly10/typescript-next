import { atom } from 'recoil';
import {Socials} from '../interfaces/CommonDatas'

export const socialsState = atom<Socials[]>({
  key: 'socialsState',
  default: [],
});