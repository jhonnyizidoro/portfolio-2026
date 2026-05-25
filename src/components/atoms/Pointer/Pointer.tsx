import type { FC } from "react";

import { cn } from "@/utils/cn";

import styles from "./Pointer.module.scss";

type Props = {
  direction: "right" | "left" | "top";
  mobileDirection?: "right" | "left" | "top";
  responsive?: boolean;
};

const Pointer: FC<Props> = ({ direction, responsive, mobileDirection }) => (
  <div
    aria-hidden="true"
    className={cn(
      styles.pointer,
      responsive && styles.responsivePointer,
      direction === "right" && styles.horizontalPointer,
      direction === "left" && cn(styles.horizontalPointer, styles.pointerLeft),
      direction === "top" && styles.verticalPointer,
      mobileDirection === "right" && styles.mobileHorizontalPointer,
      mobileDirection === "left" &&
        cn(styles.mobileHorizontalPointer, styles.mobilePointerLeft),
      mobileDirection === "top" && styles.mobileVerticalPointer,
    )}
  />
);

export default Pointer;
