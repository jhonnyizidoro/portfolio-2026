import { RefObject, useEffect, useState } from "react";

export const useOnScreen = (ref: RefObject<Element | null>) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsOnScreen(!!entry?.isIntersecting);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);

  return isOnScreen;
};
