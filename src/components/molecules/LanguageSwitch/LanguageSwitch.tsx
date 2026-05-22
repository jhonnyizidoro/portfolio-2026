import type { FC } from "react";
import { ViewTransition } from "react";
import Link from "next/link";

import Blurred from "@/components/atoms/Blurred";

import { cn } from "@/utils/cn";

import { BrFlagIcon, UsFlagIcon } from "@/assets/svg";
import { getLanguage } from "@/server/i18n";

import styles from "./LanguageSwitch.module.scss";

const LanguageSwitch: FC = async () => {
  const language = await getLanguage();
  return (
    <Blurred className={styles.wrapper} shadow="lg" bordered>
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
      <Link className={styles.link} href="/pt-br">
        <span className={styles.text}>
          PT-BR <BrFlagIcon className={styles.icon} />
        </span>
      </Link>
      <Link className={styles.link} href="/en">
        <span className={styles.text}>
          EN <UsFlagIcon className={styles.icon} />
        </span>
      </Link>
    </Blurred>
  );
};

export default LanguageSwitch;
