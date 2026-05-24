import type { FC, PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

import styles from "./Container.module.scss";

type Props = {
  className?: string;
  id?: string;
  size?: "lg" | "md" | "sm";
};

const Container: FC<PropsWithChildren<Props>> = ({
  className,
  children,
  id,
  size,
}) => (
  <section
    id={id}
    className={cn(
      className,
      styles.container,
      (!size || size === "lg") && styles.containerLg,
      size === "md" && styles.containerMd,
      size === "sm" && styles.containerSm,
    )}
  >
    {children}
  </section>
);

export default Container;
