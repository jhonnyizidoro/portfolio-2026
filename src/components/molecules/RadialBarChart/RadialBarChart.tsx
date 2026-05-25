"use client";

import { type FC, useId, useRef } from "react";

import { useIsMobile } from "@/hooks/use-is-mobile";
import { useOnScreen } from "@/hooks/use-on-screen";

import { cn } from "@/utils/cn";

import styles from "./RadialBarChart.module.scss";

type Props = {
  percentage: number;
  color: "red" | "green";
  label: string;
};

const RadialBarChart: FC<Props> = ({ percentage, color, label }) => {
  const isMobile = useIsMobile();
  const size = isMobile ? 105 : 135;
  const stroke = isMobile ? 15 : 22;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;
  const offset = circumference - (percentage / 100) * circumference;
  const id = useId();
  const filterId = `glow-${id}`;
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <div
      className={styles.wrapper}
      style={{ width: size, height: size }}
      ref={ref}
    >
      <svg width={size} height={size} className={styles.svg}>
        <defs>
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur1" />
            <feGaussianBlur stdDeviation="6" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={stroke}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={onScreen ? offset : circumference}
          filter={`url(#${filterId})`}
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
