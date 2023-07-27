import { useCallback } from 'react';

export interface WishlistHook {
  addToWishlist: (slug: string, inWishlist: boolean) => void;
}

const useAddToWishlist = (): WishlistHook => {

  const addToWishlist = useCallback((slug: string, inWishlist: boolean) => {
    console.log(slug);
    console.log(inWishlist);
  }, []);

  return { addToWishlist };
  
};

export default useAddToWishlist;
