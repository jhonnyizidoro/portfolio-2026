import type { FC } from "react";

import AboutMe from "@/components/organisms/AboutMe";
import Education from "@/components/organisms/Education";
import Introduction from "@/components/organisms/Introduction";
import Skills from "@/components/organisms/Skills";

const HomePage: FC = async () => {
  return (
    <>
      <Introduction />
      <AboutMe />
      <Skills />
      <Education />
      {/* TODO: delete */}
      <div style={{ height: 1000 }} />
    </>
  );
};

export default HomePage;
