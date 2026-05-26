"use client";

import type { FC } from "react";

import Blurred from "@/components/atoms/Blurred";
import ContactIcons from "@/components/atoms/ContactIcons";

import { cn } from "@/utils/cn";

import { useTranslations } from "@/store/i18n";

import styles from "./IntroductionContactButton.module.scss";

type Props = {
  className?: string;
};

const IntroductionContactButton: FC<Props> = ({ className }) => {
  const { intro } = useTranslations();

  return (
    <Blurred
      bordered
      className={cn(className, styles.wrapper)}
      shadow="sm"
      role="group"
      aria-label={intro.contactButtonAriaLabel}
      hoverable
    >
      <span aria-hidden="true">{intro.contactButton}</span>
      <span className={styles.icons}>
        <ContactIcons />
      </span>
    </Blurred>
  );
};

export default IntroductionContactButton;
