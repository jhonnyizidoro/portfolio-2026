"use client";

import { type FC } from "react";

import ContactIcons from "@/components/atoms/ContactIcons";

import { useIsScrolled } from "@/hooks/use-is-scrolled";

import { cn } from "@/utils/cn";

import styles from "./FloatingContact.module.scss";

const FloatingContact: FC = () => {
  const scrolled = useIsScrolled({
    offset: 200,
    resetOnZeroOnly: true,
  });

  return (
    <ContactIcons
      className={cn(styles.wrapper, scrolled && styles.wrapperScrolled)}
    />
  );
};

export default FloatingContact;
