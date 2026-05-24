import { headers } from "next/headers";

import { Language } from "@/@types/i18n";
import en from "@/messages/en.json";
import ptBr from "@/messages/pt-br.json";

const messages: Record<Language, typeof en> = { en, "pt-br": ptBr };

export const getLanguage = async (): Promise<Language> => {
  const headersList = await headers();
  return (headersList.get("x-language") as Language) ?? "en";
};

export const getTranslations = async () => {
  const language = await getLanguage();
  return messages[language];
};
