import type { FC } from "react";

import { sectionIds } from "@/constants";

import Blurred from "@/components/atoms/Blurred";
import Container from "@/components/atoms/Container";
import BarChart from "@/components/molecules/BarChart";
import RadialBarChart from "@/components/molecules/RadialBarChart";

import { cn } from "@/utils/cn";

import { RectangleIcon } from "@/assets/svg";
import { getTranslations } from "@/server/i18n";

import styles from "./Achievements.module.scss";

const Achievements: FC = async () => {
  const { achievements } = await getTranslations();

  return (
    <Container
      id={sectionIds.achievement}
      size="md"
      className={styles.container}
    >
      <RectangleIcon className={cn(styles.rectangle, styles.rectangleTop)} />
      <RectangleIcon className={cn(styles.rectangle, styles.rectangleBottom)} />
      <Blurred className={styles.card} shadow="lg">
        <div className={styles.header}>
          <div className={styles.chart} />
          <h2 className={styles.title}>{achievements.title}</h2>
        </div>
        <p className={styles.text}>{achievements.heading}</p>

        <div className={styles.chartWrapper}>
          <div>
            <BarChart
              first={{ label: "10 req/s", color: "gray" }}
              second={{ label: "200 req/s", color: "green" }}
            />

            <p className={styles.leftTet}>{achievements.leftText}</p>
          </div>

          <Blurred className={styles.right} shadow="lg">
            <p className={styles.rightText}>{achievements.rightText}</p>
            <div className={styles.rightWrapper}>
              <RadialBarChart percentage={100} color="red" label="240 MB" />
              <RadialBarChart percentage={50} color="green" label="120 MB" />
            </div>
            <span className={styles.rightFooterText}>
              {achievements.rightFooter}
            </span>
          </Blurred>
        </div>
      </Blurred>
    </Container>
  );
};

export default Achievements;
