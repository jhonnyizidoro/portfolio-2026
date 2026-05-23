import type { FC } from "react";

import AboutMe from "@/components/organisms/AboutMe";
import Introduction from "@/components/organisms/Introduction";

const HomePage: FC = async () => {
  return (
    <>
      <Introduction />
      <AboutMe />
      <div style={{ height: 1000 }} />
    </>
  );
};

export default HomePage;
