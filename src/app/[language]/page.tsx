import type { FC } from "react";
import Link from "next/link";

import { getLanguage, getTranslations } from "@/server/i18n";

const HomePage: FC = async () => {
  const language = await getLanguage();
  const t = await getTranslations();

  return <></>;
};

export default HomePage;
