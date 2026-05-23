import type { FC } from "react";

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

import styles from "./Education.module.scss";

const Education: FC = () => (
  <Container size="md">
    <h2 className={styles.title}>Education</h2>
    <div className={styles.wrapper}>
      <SphereIcon className={cn(styles.sphere, styles.sphereTop)} />
      <SphereIcon className={cn(styles.sphere, styles.sphereBottom)} />

      <Blurred shadow="lg" className={styles.card}>
        <h3 className={styles.header}>
          <span className={styles.iconWrapper}>
            <UniversityIcon className={styles.icon} width={24} />
          </span>
          Bachelor degree
        </h3>

        <div>
          <span className={styles.text}>Computer Science</span>
          <span className={styles.textLight}>2016 - 2022</span>
        </div>

        <strong className={styles.textMedium}>
          UFPR - Universidade Federal do Paraná
        </strong>
      </Blurred>

      <Blurred shadow="lg" className={styles.card}>
        <h3 className={styles.header}>
          <span className={styles.iconWrapper}>
            <TranslationIcon className={styles.icon} width={24} />
          </span>
          Languages I speak
        </h3>

        <div className={styles.list}>
          <Blurred className={styles.listItem} bordered>
            <BrFlagIcon width={20} /> Portuguese - <strong>Native</strong>
          </Blurred>

          <Blurred className={styles.listItem} bordered>
            <UsFlagIcon width={20} /> English - <strong>Fluent/C1</strong>
          </Blurred>
        </div>
      </Blurred>
    </div>
  </Container>
);

export default Education;
