import { useEffect, useRef, useState } from "react";

export const useIsScrolled = (opts: {
  offset: number;
  resetOnZeroOnly?: boolean;
  neverReset?: boolean;
}) => {
  const [scrolled, setScrolled] = useState(false);
  const removeRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (opts.neverReset) {
        if (window.scrollY > opts.offset) {
          setScrolled(true);
          removeRef.current?.();
          removeRef.current = null;
        }
        return;
      }

      if (opts.resetOnZeroOnly) {
        if (window.scrollY === 0) setScrolled(false);
        else if (window.scrollY > opts.offset) setScrolled(true);
      } else {
        setScrolled(window.scrollY > opts.offset);
      }
    };

    const remove = () => window.removeEventListener("scroll", onScroll);
    removeRef.current = remove;

    onScroll();
    window.addEventListener("scroll", onScroll);

    return remove;
  }, [opts.resetOnZeroOnly, opts.neverReset, opts.offset]);

  return scrolled;
};
