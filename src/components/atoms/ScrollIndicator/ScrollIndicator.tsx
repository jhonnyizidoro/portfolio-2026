"use client";

import { type FC } from "react";

import { useIsScrolled } from "@/hooks/use-is-scrolled/use-is-scrolled";

import { cn } from "@/utils/cn";

import Pointer from "../Pointer";

import styles from "./ScrollIndicator.module.scss";

const ScrollIndicator: FC = () => {
  const scrolled = useIsScrolled({ offset: 50 });

  return (
    <button
      // TODO: scroll on click
      onClick={() => {}}
      className={cn(styles.indicator, scrolled && styles.scrolled)}
      type="button"
    >
      Scroll <Pointer direction="top" />
    </button>
  );
};

export default ScrollIndicator;
