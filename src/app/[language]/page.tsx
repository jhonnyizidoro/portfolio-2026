import type { FC } from "react";

import Introduction from "@/components/organisms/Introduction";

const HomePage: FC = async () => {
  return (
    <>
      <Introduction />
      <div style={{ height: 1000 }} />
    </>
  );
};

export default HomePage;
