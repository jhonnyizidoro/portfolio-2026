import type { FC } from "react";

export function generateStaticParams() {
  return [{ language: "en" }, { language: "pt-br" }];
}

import AboutMe from "@/components/organisms/AboutMe";
import Achievements from "@/components/organisms/Achievements";
import Education from "@/components/organisms/Education";
import Experience from "@/components/organisms/Experience";
import Introduction from "@/components/organisms/Introduction";
import Projects from "@/components/organisms/Projects";
import Skills from "@/components/organisms/Skills";
import Workflow from "@/components/organisms/Workflow";

import { Language } from "@/@types/i18n";
import en from "@/messages/en.json";
import ptBr from "@/messages/pt-br.json";

type Props = {
  params: Promise<{
    language: string;
  }>;
};

const HomePage: FC<Props> = async ({ params }) => {
  const language = (await params).language as Language;
  const t = language === "en" ? en : ptBr;

  return (
    <>
      <Introduction intro={t.intro} />
      <AboutMe aboutMe={t.aboutMe} />
      <Skills skills={t.skills} experience={t.experience} />
      <Education />
      <Experience experience={t.experience} />
      <Achievements achievements={t.achievements} />
      <Workflow />
      <Projects projects={t.projects} />
    </>
  );
};

export default HomePage;
