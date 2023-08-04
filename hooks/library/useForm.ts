import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

interface Locale {
  value: string;
  name: string;
  disabled: boolean;
}

export interface LocaleHook {
  // changeLocale: (selectedLocale: string) => void;
  form: string;
  setMyData: any;
  myData: string;
}

const useForm = (): LocaleHook => {

  const [myData, setMyData] = useState<string>('my-data');

  const form = "form";


  const [states, setStates] = useState<{}>({});

  return { form, setMyData, myData };

};

export default useForm;
