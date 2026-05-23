import type { FC } from "react";

import AboutMe from "@/components/organisms/AboutMe";
import Introduction from "@/components/organisms/Introduction";
import Skills from "@/components/organisms/Skills";

const HomePage: FC = async () => {
  return (
    <>
      <Introduction />
      <AboutMe />
      <Skills />

      {/* TODO: delete */}
      <div style={{ height: 1000 }} />
    </>
  );
};

export default HomePage;
