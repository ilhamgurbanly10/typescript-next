import { useCallback, useMemo } from 'react';
import {useRouter } from 'next/router';

export interface RecursionHook {
  divideArrayIntoChunks: (array: any, chunkSize: number) => any;
}

const useRecursion = (): RecursionHook => {
  
  const divideArrayIntoChunks = useCallback((array: any, chunkSize: number): any => {
    if (array.length <= chunkSize) {
      return [array]; 
    } else {
      const chunk = array.slice(0, chunkSize); 
      const remaining = array.slice(chunkSize);
      return [chunk, ...divideArrayIntoChunks(remaining, chunkSize)]; 
    }
  }, []);

  return { divideArrayIntoChunks };

};

export default useRecursion;
