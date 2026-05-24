import type { FC } from "react";

import { sectionIds } from "@/constants";

import Blurred from "@/components/atoms/Blurred";
import Container from "@/components/atoms/Container";
import BarChart from "@/components/molecules/BarChart";
import RadialBarChart from "@/components/molecules/RadialBarChart";

import { cn } from "@/utils/cn";

import { RectangleIcon } from "@/assets/svg";

import styles from "./Achievements.module.scss";

const Achievements: FC = () => (
  <Container id={sectionIds.achievement} size="md" className={styles.container}>
    <RectangleIcon className={cn(styles.rectangle, styles.rectangleTop)} />
    <RectangleIcon className={cn(styles.rectangle, styles.rectangleBottom)} />
    <Blurred className={styles.card} shadow="lg">
      <div className={styles.header}>
        <div className={styles.chart} />
        <h2 className={styles.title}>Achievements</h2>
      </div>
      <p className={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div className={styles.chartWrapper}>
        <div>
          <BarChart
            first={{ label: "10 req/s", color: "gray" }}
            second={{ label: "200 req/s", color: "green" }}
          />

          <p className={styles.leftTet}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>

        <Blurred className={styles.right} shadow="lg">
          <p className={styles.rightText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <div className={styles.rightWrapper}>
            <RadialBarChart percentage={100} color="red" label="240 MB" />
            <RadialBarChart percentage={50} color="green" label="120 MB" />
          </div>
          <span className={styles.rightFooterText}>
            * Memory usage in bytes of the app before vs after the refactor
          </span>
        </Blurred>
      </div>
    </Blurred>
  </Container>
);

export default Achievements;
