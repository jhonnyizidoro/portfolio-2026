"use client";

"use client";

import type { FC } from "react";
import { ViewTransition } from "react";
import Link from "next/link";

import Blurred from "@/components/atoms/Blurred";

import { useIsScrolled } from "@/hooks/use-is-scrolled";

import { cn } from "@/utils/cn";

import { BrFlagIcon, UsFlagIcon } from "@/assets/svg";
import { useLanguage, useTranslations } from "@/store/i18n";

import styles from "./LanguageSwitch.module.scss";

const LanguageSwitch: FC = () => {
  const { languageSwitch } = useTranslations();
  const language = useLanguage();

  const scrolled = useIsScrolled({
    offset: 200,
    resetOnZeroOnly: true,
  });

  return (
    <Blurred
      className={cn(styles.wrapper, scrolled && styles.wrapperScrolled)}
      shadow="lg"
      bordered
    >
      <ViewTransition name="language-switch-indicator">
        <Blurred
          bordered
          shadow="sm"
          className={cn(
            styles.blurred,
            language === "en" && styles.blurredRight,
            language === "pt-br" && styles.blurredLeft,
          )}
        />
      </ViewTransition>
      <Link
        className={styles.link}
        href="/pt-br"
        aria-label={languageSwitch.ptBrAriaLabel}
      >
        PT-BR <BrFlagIcon className={styles.icon} />
      </Link>
      <Link
        className={styles.link}
        href="/en"
        aria-label={languageSwitch.enAriaLabel}
      >
        EN <UsFlagIcon className={styles.icon} />
      </Link>
    </Blurred>
  );
};

export default LanguageSwitch;
