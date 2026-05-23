import type { FC, PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

import styles from "./Container.module.scss";

type Props = {
  className?: string;
  id?: string;
  size?: "lg" | "md";
};

const Container: FC<PropsWithChildren<Props>> = ({
  className,
  children,
  id,
  size,
}) => (
  <div
    id={id}
    className={cn(
      className,
      styles.container,
      (!size || size === "lg") && styles.containerLg,
      size === "md" && styles.containerMd,
    )}
  >
    {children}
  </div>
);

export default Container;
