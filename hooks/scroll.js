import { useCallback } from 'react';

export function useScroll() {
  if (process.browser) {
    const setScroll = useCallback((top) => {
      window.scroll({ top });
    }, [window]);

    return { setScroll };
  }

  return { setScroll: () => {} };
}
