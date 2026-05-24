import type { FC } from "react";

import { cn } from "@/utils/cn";

import styles from "./BarChart.module.scss";

type BarChartItem = {
  label: string;
  color: "gray" | "green";
};

type Props = {
  first: BarChartItem;
  second: BarChartItem;
};

const BarChart: FC<Props> = ({ first, second }) => (
  <div className={styles.wrapper}>
    <div className={styles.left}>
      <span className={cn(styles.label, styles.labelTop)}>{second.label}</span>
      <span className={cn(styles.label, styles.labelBottom)}>
        {first.label}
      </span>
    </div>
    <div className={styles.right}>
      <div className={cn(styles.bar, styles.barLeft)} />
      <div className={cn(styles.bar, styles.barRight)} />
      <div className={cn(styles.dashes, styles.dashesTop)} />
      <div className={cn(styles.dashes, styles.dashesBottom)} />
    </div>
  </div>
);

export default BarChart;
