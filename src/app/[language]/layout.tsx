import { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";

import BodyBackground from "@/components/atoms/BodyBackground";
import FloatingContact from "@/components/molecules/FloatingContact";
import Footer from "@/components/molecules/Footer";
import LanguageSwitch from "@/components/molecules/LanguageSwitch";

import { Language } from "@/@types/i18n";
import { proximaNova } from "@/assets/fonts";
import en from "@/messages/en.json";
import ptBr from "@/messages/pt-br.json";
import { I18nProvider } from "@/store/i18n";

import "@/assets/globals.scss";
import styles from "./layout.module.scss";

type Props = {
  params: Promise<{
    language: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const language = (await params).language as Language;

  if (language === "pt-br") {
    return {
      title: "Jhonny Menarim - Engenheiro Sênior Full Stack",
      description:
        "Portfólio de engenheiro fullstack com mais de 9 anos de experiência em React, Next.js, Node.js e IA.",
    };
  }

  return {
    title: "Jhonny Menarim - Senior Full Stack Engineer",
    description:
      "Portfolio of a fullstack engineer with 9+ years building production apps with React, Next.js, Node.js, and AI.",
  };
}

const RootLayout: FC<PropsWithChildren<Props>> = async ({
  children,
  params,
}) => {
  const language = (await params).language as Language;
  const t = language === "en" ? en : ptBr;

  return (
    <html lang={language} className={proximaNova.variable}>
      <I18nProvider language={language} t={t}>
        <body>
          <a href="#main-content" className={styles.skipLink}>
            {t.accessibility.skipToContent}
          </a>
          <header>
            <FloatingContact />
            <LanguageSwitch />
          </header>
          <BodyBackground />
          <main id="main-content" className={styles.content}>
            {children}
          </main>
          <Footer footer={t.footer} />
        </body>
      </I18nProvider>
    </html>
  );
};

export default RootLayout;
