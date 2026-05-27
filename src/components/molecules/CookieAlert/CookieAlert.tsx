"use client";

import { type FC, useCallback, useEffect, useState } from "react";

import Blurred from "@/components/atoms/Blurred";

import { useIsScrolled } from "@/hooks/use-is-scrolled";

import { CookieIcon } from "@/assets/svg";
import { useTranslations } from "@/store/i18n";

import styles from "./CookieAlert.module.scss";

const CookieAlert: FC = () => {
  const scrolled = useIsScrolled({ offset: 200, neverReset: true });
  const [visible, setVisible] = useState(false);
  const translations = useTranslations();

  const handleClose = useCallback(() => {
    setVisible(false);
    localStorage.setItem("cookie-alert", String(Date.now()));
  }, []);

  useEffect(() => {
    const alreadyAccepted = localStorage.getItem("cookie-alert");

    if (alreadyAccepted) {
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(scrolled);
  }, [scrolled]);

  if (!visible) {
    return;
  }

  return (
    <Blurred className={styles.wrapper} shadow="lg">
      <CookieIcon className={styles.icon} width={30} />
      <div className={styles.content}>
        <h2 className={styles.title}>{translations.cookieAlert.title}</h2>

        <p className={styles.text}>{translations.cookieAlert.text}</p>
      </div>

      <button type="button" onClick={handleClose} className={styles.button}>
        {translations.cookieAlert.consent}
      </button>
    </Blurred>
  );
};

export default CookieAlert;
