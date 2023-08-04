import { useCallback, useState } from 'react';

export interface EventsHook {
  backToTop: (selectedLocale: any) => void;
  showBackToTopBtn: boolean;
}

const useEvents = (): EventsHook => {

  // back-to-top-btn
  const [showBackToTopBtn, setShowBackToTopBtn] = useState<boolean>(false);

  const backToTop = useCallback((btn: any) => {
     const toggle = () => document.documentElement.scrollTop > 100 ? setShowBackToTopBtn(true) : setShowBackToTopBtn(false); 
      btn?.addEventListener('click', () => { setShowBackToTopBtn(false); });
      btn?.addEventListener('click', () => { document.documentElement.scrollTop = 0; });
      window.addEventListener('scroll', toggle);
      toggle();
  }, []);

  return { backToTop, showBackToTopBtn };

};

export default useEvents;

// npx create-next-app@12 --ts
