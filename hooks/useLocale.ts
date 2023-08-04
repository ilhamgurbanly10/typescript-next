import { useCallback, useMemo } from 'react';
import {useRouter } from 'next/router';

interface Locale {
  value: string;
  name: string;
  disabled: boolean;
}

export interface LocaleHook {
  changeLocale: (selectedLocale: string) => void;
  locale: any;
  locales: Locale[];
  defaultLocale: string;
}

const useLocale = (): LocaleHook => {

  const router = useRouter();
  const locale = router?.locale;

  const locales = useMemo<Locale[]>(() => {
    return [
      {
        value: "az",
        name: "AZ",
        disabled: false
      },
      {
        value: "en",
        name: "EN",
        disabled: false
      }
    ]
  }, [])

  const changeLocale = useCallback((selectedLocale: string) => {
    router.push(router.route, router.asPath, {
      locale: selectedLocale
    })
    localStorage.setItem('locale', selectedLocale);
  }, []);

  const defaultLocale = "az";

  return { locales, locale, changeLocale, defaultLocale };

};

export default useLocale;
