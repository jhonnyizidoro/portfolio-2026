import type { FC } from "react";
import Link from "next/link";

import { getLanguage, getTranslations } from "@/server/i18n";

const HomePage: FC = async () => {
  const language = await getLanguage();
  const t = await getTranslations();

  return (
    <>
      <h1>{t.intro.title}</h1>
      <Link href={language === "en" ? "/pt-br" : "/en"}>Switch language</Link>
    </>
  );
};

export default HomePage;
