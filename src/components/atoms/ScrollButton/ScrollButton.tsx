"use client";

import {
  type ButtonHTMLAttributes,
  type FC,
  MouseEvent,
  useCallback,
} from "react";

import { scrollTo } from "@/utils/scrollTo";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  scrollTarget: string;
};

const ScrollButton: FC<Props> = ({ scrollTarget, onClick, ...props }) => {
  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      scrollTo(scrollTarget);
      onClick?.(e);
    },
    [onClick, scrollTarget],
  );

  return <button {...props} onClick={handleClick} />;
};

export default ScrollButton;
