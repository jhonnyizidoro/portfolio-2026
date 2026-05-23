import { useEffect, useState } from "react";

export const useIsScrolled = (opts: {
  offset: number;
  resetOnZeroOnly?: boolean;
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (opts.resetOnZeroOnly) {
        if (window.scrollY === 0) setScrolled(false);
        else if (window.scrollY > opts.offset) setScrolled(true);
      } else {
        setScrolled(window.scrollY > opts.offset);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [opts.resetOnZeroOnly, opts.offset]);

  return scrolled;
};
