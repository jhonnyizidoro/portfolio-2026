"use client";

import { type FC, useRef } from "react";

import { useOnScreen } from "@/hooks/use-on-screen";

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

const BarChart: FC<Props> = ({ first, second }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.left}>
        <span className={cn(styles.label, onScreen && styles.labelTopVisible)}>
          {second.label}
        </span>
        <span
          className={cn(styles.label, onScreen && styles.labelBottomVisible)}
        >
          {first.label}
        </span>
      </div>
      <div className={styles.right}>
        <div
          className={cn(
            styles.bar,
            styles.barLeft,
            onScreen && styles.barLeftVisible,
          )}
        />
        <div
          className={cn(
            styles.bar,
            styles.barRight,
            onScreen && styles.barRightVisible,
          )}
        />
        <div
          className={cn(
            styles.dashes,
            styles.dashesTop,
            onScreen && styles.dashesTopVisible,
          )}
        />
        <div
          className={cn(
            styles.dashes,
            styles.dashesBottom,
            onScreen && styles.dashesBottomVisible,
          )}
        />
      </div>
    </div>
  );
};

export default BarChart;
