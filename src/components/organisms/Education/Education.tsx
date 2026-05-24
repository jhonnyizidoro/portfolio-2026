import type { FC } from "react";

import { sectionIds } from "@/constants";

import Blurred from "@/components/atoms/Blurred";
import Container from "@/components/atoms/Container";

import { cn } from "@/utils/cn";

import {
  BrFlagIcon,
  SphereIcon,
  TranslationIcon,
  UniversityIcon,
  UsFlagIcon,
} from "@/assets/svg";
import { getTranslations } from "@/server/i18n";

import styles from "./Education.module.scss";

const Education: FC = async () => {
  const { education } = await getTranslations();

  return (
    <Container size="sm" id={sectionIds.education}>
      <h2 className={styles.title}>{education.title}</h2>
      <div className={styles.wrapper}>
        <SphereIcon className={cn(styles.sphere, styles.sphereTop)} />
        <SphereIcon className={cn(styles.sphere, styles.sphereBottom)} />

        <Blurred shadow="lg" className={styles.card}>
          <h3 className={styles.header}>
            <span className={styles.iconWrapper}>
              <UniversityIcon className={styles.icon} width={24} />
            </span>
            {education.degreeLabel}
          </h3>

          <div>
            <span className={styles.text}>{education.degreeField}</span>
            <span className={styles.textLight}>{education.degreePeriod}</span>
          </div>

          <strong className={styles.textMedium}>
            {education.degreeInstitution}
          </strong>
        </Blurred>

        <Blurred shadow="lg" className={styles.card}>
          <h3 className={styles.header}>
            <span className={styles.iconWrapper}>
              <TranslationIcon className={styles.icon} width={24} />
            </span>
            {education.languagesLabel}
          </h3>

          <div className={styles.list}>
            <Blurred className={styles.listItem} bordered>
              <BrFlagIcon width={20} /> {education.portuguese} -{" "}
              <strong>{education.portugueseLevel}</strong>
            </Blurred>

            <Blurred className={styles.listItem} bordered>
              <UsFlagIcon width={20} /> {education.english} -{" "}
              <strong>{education.englishLevel}</strong>
            </Blurred>
          </div>
        </Blurred>
      </div>
    </Container>
  );
};

export default Education;
