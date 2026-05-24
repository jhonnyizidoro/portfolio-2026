"use client";

import { type FC, useRef } from "react";

import { useOnScreen } from "@/hooks/use-on-screen";

import { cn } from "@/utils/cn";

import styles from "./RadialBarChart.module.scss";

type Props = {
  percentage: number;
  color: "red" | "green";
  label: string;
};

const SIZE = 135;
const STROKE = 22;

const radius = (SIZE - STROKE) / 2;
const circumference = 2 * Math.PI * radius;
const center = SIZE / 2;

const RadialBarChart: FC<Props> = ({ percentage, color, label }) => {
  const offset = circumference - (percentage / 100) * circumference;
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <div
      className={styles.wrapper}
      style={{ width: SIZE, height: SIZE }}
      ref={ref}
    >
      <svg width={SIZE} height={SIZE} className={styles.svg}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={STROKE}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={STROKE}
          strokeDasharray={circumference}
          strokeDashoffset={onScreen ? offset : circumference}
          className={cn(
            color === "red" && styles.progressRed,
            color === "green" && styles.progressGreen,
          )}
        />
      </svg>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default RadialBarChart;
