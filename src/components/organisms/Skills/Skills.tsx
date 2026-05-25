import { type FC, Suspense } from "react";

import { sectionIds } from "@/constants";

import Blurred from "@/components/atoms/Blurred";
import Container from "@/components/atoms/Container";
import OnScreen from "@/components/atoms/OnScreen";
import SkillYears from "@/components/atoms/SkillYears";

import { cn } from "@/utils/cn";

import { Messages } from "@/@types/i18n";

import styles from "./Skills.module.scss";

type Props = {
  experience: Messages["experience"];
  skills: Messages["skills"];
};

const Skills: FC<Props> = ({ experience, skills }) => (
  <Container className={styles.container} id={sectionIds.skills}>
    <OnScreen
      className={styles.pattern}
      hiddenClassName={styles.patternBottom}
      onScreenClassName={styles.patternBottomVisible}
    />
    <OnScreen
      className={styles.pattern}
      hiddenClassName={styles.patternTop}
      onScreenClassName={styles.patternTopVisible}
    />

    <Blurred shadow="lg" className={styles.card}>
      <h2 className={styles.title}>
        <strong className={styles.titleAccent}>{skills.frontendTitle}</strong>{" "}
        {skills.skillsSuffix}
      </h2>
      <span className={styles.text}>{skills.frontendText}</span>
      <ul className={styles.list}>
        {skills.frontend.map((s) => (
          <Blurred className={styles.skill} key={s} as="li" bordered>
            {s}
            <span className={styles.time}>
              <Suspense fallback="0yr">
                <SkillYears skill={s} experiences={experience.experiences} />
              </Suspense>
            </span>
          </Blurred>
        ))}
      </ul>
    </Blurred>

    <Blurred shadow="lg" className={cn(styles.card, styles.cardHigh)}>
      <h2 className={styles.title}>
        <strong className={styles.titlePurple}>{skills.backendTitle}</strong>{" "}
        {skills.skillsSuffix}
      </h2>
      <span className={styles.text}>{skills.backendText}</span>
      <ul className={styles.list}>
        {skills.backend.map((s) => (
          <Blurred className={styles.skill} key={s} as="li" bordered>
            {s}
            <span className={styles.time}>
              <Suspense fallback="0yr">
                <SkillYears skill={s} experiences={experience.experiences} />
              </Suspense>
            </span>
          </Blurred>
        ))}
      </ul>
    </Blurred>

    <Blurred shadow="lg" className={styles.card}>
      <h2 className={styles.title}>
        <strong className={styles.titleRed}>Miscellaneous</strong>
      </h2>
      <span className={styles.text}>
        Check the skills I have experience with, and for how long
      </span>
      <ul className={styles.list}>
        {skills.misc.map((s) => (
          <Blurred className={styles.skill} key={s} as="li" bordered>
            {s}
            <span className={styles.time}>
              <Suspense fallback="0yr">
                <SkillYears skill={s} experiences={experience.experiences} />
              </Suspense>
            </span>
          </Blurred>
        ))}
      </ul>
    </Blurred>
  </Container>
);

export default Skills;
