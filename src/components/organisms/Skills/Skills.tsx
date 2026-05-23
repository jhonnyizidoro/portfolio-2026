import type { FC } from "react";

import Blurred from "@/components/atoms/Blurred";
import Container from "@/components/atoms/Container";
import OnScreen from "@/components/atoms/OnScreen";

import { cn } from "@/utils/cn";
import { getSkillYears } from "@/utils/getSkillYears";

import { getTranslations } from "@/server/i18n";

import styles from "./Skills.module.scss";

const Skills: FC = async () => {
  const t = await getTranslations();

  return (
    <Container className={styles.container}>
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
          <strong className={styles.titleAccent}>Frontend</strong> Skills
        </h2>
        <span className={styles.text}>
          Check the skills I have experience with, and for how long
        </span>
        <ul className={styles.list}>
          {t.skills.frontend.map((s) => (
            <Blurred className={styles.skill} key={s} as="li" bordered>
              {s}
              <span className={styles.time}>
                {getSkillYears(s, t.experiences)}yr
              </span>
            </Blurred>
          ))}
        </ul>
      </Blurred>

      <Blurred shadow="lg" className={cn(styles.card, styles.cardHigh)}>
        <h2 className={styles.title}>
          <strong className={styles.titlePurple}>Backend</strong> Skills
        </h2>
        <span className={styles.text}>
          Check the skills I have experience with, and for how long
        </span>
        <ul className={styles.list}>
          {t.skills.backend.map((s) => (
            <Blurred className={styles.skill} key={s} as="li" bordered>
              {s}
              <span className={styles.time}>
                {getSkillYears(s, t.experiences)}yr
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
          {t.skills.misc.map((s) => (
            <Blurred className={styles.skill} key={s} as="li" bordered>
              {s}
              <span className={styles.time}>
                {getSkillYears(s, t.experiences)}yr
              </span>
            </Blurred>
          ))}
        </ul>
      </Blurred>
    </Container>
  );
};

export default Skills;
