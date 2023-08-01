import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { modeState } from '../state/atoms';

export interface DarkModeHook {
  toDarkMode: () => void;
  toLightMode: () => void;
  toDefaultMode: () => void;
  mode: string;
}

const useDarkMode = (): DarkModeHook => {

  const [mode, setMode] = useRecoilState<string>(modeState);

  const toDarkMode = useCallback(() => {
    setMode('dark');
    localStorage.setItem('mode', 'dark');
    document.body.classList.add('dark-mode');
  }, []);

  const toLightMode = useCallback(() => {
    setMode('light');
    localStorage.setItem('mode', 'light');
    document.body.classList.remove('dark-mode');
  }, []);

  const toDefaultMode = useCallback(() => {
    localStorage.getItem('mode') == 'dark' ? toDarkMode() : toLightMode();
  }, []);

  return { toDarkMode, toLightMode, toDefaultMode, mode };

};

export default useDarkMode;
