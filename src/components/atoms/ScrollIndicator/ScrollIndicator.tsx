"use client";

import { type FC } from "react";

import { sectionIds } from "@/constants";

import { useIsScrolled } from "@/hooks/use-is-scrolled/use-is-scrolled";

import { cn } from "@/utils/cn";
import { scrollTo } from "@/utils/scrollTo";

import Pointer from "../Pointer";

import styles from "./ScrollIndicator.module.scss";

const ScrollIndicator: FC = () => {
  const scrolled = useIsScrolled({ offset: 50 });

  return (
    <button
      type="button"
      onClick={() => scrollTo(sectionIds.aboutMe)}
      className={cn(styles.indicator, scrolled && styles.scrolled)}
    >
      Scroll <Pointer direction="top" />
    </button>
  );
};

export default ScrollIndicator;
