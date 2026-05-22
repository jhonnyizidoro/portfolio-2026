import type { FC, PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

import styles from "./Blurred.module.scss";

type Props = {
  className?: string;
  bordered?: boolean;
  shadow?: "sm" | "md" | "lg";
};

const Blurred: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  bordered,
  shadow,
}) => (
  <div
    className={cn(
      className,
      styles.blurred,
      bordered && styles.bordered,
      shadow === "sm" && styles.shadowSm,
      shadow === "md" && styles.shadowMd,
      shadow === "lg" && styles.shadowLg,
    )}
  >
    {children}
  </div>
);

export default Blurred;
