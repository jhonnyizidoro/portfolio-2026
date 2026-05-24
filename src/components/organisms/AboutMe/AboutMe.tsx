import type { FC } from "react";

import { sectionIds } from "@/constants";

import Container from "@/components/atoms/Container";

import styles from "./AboutMe.module.scss";

const AboutMe: FC = () => (
  <Container size="sm" id={sectionIds.aboutMe} className={styles.aboutMe}>
    Senior Full-Stack / Front-End Engineer with 9+ years of experience
    specializing in the React ecosystem (including Next.js and Remix), scalable
    Node.js/Javascript/TypeScript architectures, and high performance
    applications. Proven track record of architecting robust web platforms from
    scratch, modernizing complex codebases, and optimizing frontend performance
    to ensure seamless, low latency user experiences at scale. Adept at driving
    technical decisions, leveraging AI-assisted workflows, and delivering impact
    within distributed, international remote teams.
  </Container>
);

export default AboutMe;
