import type { FC } from "react";

import { cn } from "@/utils/cn";

import styles from "./Pointer.module.scss";

type Props = {
  direction: "right" | "left" | "top";
};

const Pointer: FC<Props> = ({ direction }) => (
  <div
    className={cn(
      styles.pointer,
      direction === "right" && styles.horizontalPointer,
      direction === "left" && cn(styles.horizontalPointer, styles.pointerLeft),
      direction === "top" && styles.verticalPointer,
    )}
  />
);

export default Pointer;
