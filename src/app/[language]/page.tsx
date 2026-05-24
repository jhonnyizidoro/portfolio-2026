import type { FC } from "react";

import AboutMe from "@/components/organisms/AboutMe";
import Achievements from "@/components/organisms/Achievements";
import Education from "@/components/organisms/Education";
import Experience from "@/components/organisms/Experience";
import Introduction from "@/components/organisms/Introduction";
import Skills from "@/components/organisms/Skills";

const HomePage: FC = async () => {
  return (
    <>
      <Introduction />
      <AboutMe />
      <Skills />
      <Education />
      <Experience />
      <Achievements />
      {/* TODO: delete */}
      <div style={{ height: 1000 }} />
    </>
  );
};

export default HomePage;
