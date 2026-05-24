import type { FC } from "react";

import AboutMe from "@/components/organisms/AboutMe";
import Achievements from "@/components/organisms/Achievements";
import Education from "@/components/organisms/Education";
import Experience from "@/components/organisms/Experience";
import Introduction from "@/components/organisms/Introduction";
import Projects from "@/components/organisms/Projects";
import Skills from "@/components/organisms/Skills";
import Workflow from "@/components/organisms/Workflow";

const HomePage: FC = async () => {
  return (
    <>
      <Introduction />
      <AboutMe />
      <Skills />
      <Education />
      <Experience />
      <Achievements />
      <Workflow />
      <Projects />
    </>
  );
};

export default HomePage;
