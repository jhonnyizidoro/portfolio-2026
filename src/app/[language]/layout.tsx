import { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { jsonLd, siteUrl } from "@/constants";

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
  const t = language === "en" ? en : ptBr;
  const { title, description, keywords } = t.seo;
  const url = `${siteUrl}/${language}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords,
    authors: [{ name: "Jhonny Menarim", url: siteUrl }],
    creator: "Jhonny Menarim",
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${siteUrl}/en`,
        "pt-BR": `${siteUrl}/pt-br`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Jhonny Menarim",
      title,
      description,
      url,
      locale: language === "pt-br" ? "pt_BR" : "en_US",
      alternateLocale: language === "pt-br" ? ["en_US"] : ["pt_BR"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
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
      <Analytics />
      <I18nProvider language={language} t={t}>
        <body>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
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
