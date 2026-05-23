"use client";

import { type FC, useRef } from "react";

import { useOnScreen } from "@/hooks/use-on-screen";

import { cn } from "@/utils/cn";

type Props = {
  hiddenClassName?: string;
  onScreenClassName?: string;
  className?: string;
};

const OnScreen: FC<Props> = ({
  className,
  hiddenClassName,
  onScreenClassName,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={cn(
        className,
        onScreen && onScreenClassName,
        !onScreen && hiddenClassName,
      )}
    />
  );
};

export default OnScreen;
