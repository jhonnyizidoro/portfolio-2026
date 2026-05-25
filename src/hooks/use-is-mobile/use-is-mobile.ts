import { useSyncExternalStore } from "react";

const BREAKPOINT = "(width < 1280px)";

const subscribe = (callback: () => void) => {
  const mq = window.matchMedia(BREAKPOINT);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
};

const getSnapshot = () => window.matchMedia(BREAKPOINT).matches;
const getServerSnapshot = () => false;

export const useIsMobile = () =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
