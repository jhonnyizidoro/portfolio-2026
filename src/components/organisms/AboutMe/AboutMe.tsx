import type { FC } from "react";

import { sectionIds } from "@/constants";

import Container from "@/components/atoms/Container";

import { Messages } from "@/@types/i18n";

import styles from "./AboutMe.module.scss";

type Props = {
  aboutMe: Messages["aboutMe"];
};

const AboutMe: FC<Props> = async ({ aboutMe }) => (
  <Container size="sm" id={sectionIds.aboutMe} className={styles.aboutMe}>
    {aboutMe.text}
  </Container>
);

export default AboutMe;
