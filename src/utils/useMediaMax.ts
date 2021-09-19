import { useEffect, useState } from 'react';

const useMediaMax = (breakpoint: number): boolean => {
  const query = `(max-width: ${breakpoint}px)`;
  const mediaQueryList = window.matchMedia(query);

  // State and setter for matched value
  const [matches, setMatches] = useState(mediaQueryList.matches);

  useEffect(() => {
    const handler = () => setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', handler);
    return () => mediaQueryList.removeEventListener('change', handler);
  }, []);

  return matches;
};

export default useMediaMax;
