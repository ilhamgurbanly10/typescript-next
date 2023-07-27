import {Socials} from '../interfaces/CommonDatas'
import api from './api'

export const getSocials = async (): Promise<Socials[]> => {
  try {
    const response = await api.get('social/');
    return response?.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

