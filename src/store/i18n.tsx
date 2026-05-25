"use client";

import {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
} from "react";

import { Language, Messages } from "@/@types/i18n";

type I18nContextValue = { language: Language; t: Messages };

const I18nContext = createContext<I18nContextValue>({} as I18nContextValue);

type Props = PropsWithChildren<{ language: Language; t: Messages }>;

export const I18nProvider: FC<Props> = ({ children, language, t }) => {
  return (
    <I18nContext.Provider value={{ language, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  return useContext(I18nContext);
};

export const useTranslations = () => {
  const { t } = useContext(I18nContext);
  return t;
};

export const useLanguage = () => {
  const { language } = useContext(I18nContext);
  return language;
};
