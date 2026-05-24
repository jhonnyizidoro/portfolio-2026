import type { FC } from "react";

import { sectionIds } from "@/constants";

import Container from "@/components/atoms/Container";

import { getTranslations } from "@/server/i18n";

import styles from "./AboutMe.module.scss";

const AboutMe: FC = async () => {
  const { aboutMe } = await getTranslations();

  return (
    <Container size="sm" id={sectionIds.aboutMe} className={styles.aboutMe}>
      {aboutMe.text}
    </Container>
  );
};

export default AboutMe;
