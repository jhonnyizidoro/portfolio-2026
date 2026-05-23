import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";

import { cn } from "@/utils/cn";

import styles from "./Blurred.module.scss";

type BlurredOwnProps = {
  className?: string;
  bordered?: boolean;
  shadow?: "sm" | "md" | "lg";
};

type Props<T extends ElementType> = BlurredOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof BlurredOwnProps> & {
    as?: T;
  };

const Blurred = <T extends ElementType = "div">({
  as,
  children,
  className,
  bordered,
  shadow,
  ...rest
}: PropsWithChildren<Props<T>>) => {
  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag
      className={cn(
        className,
        styles.blurred,
        bordered && styles.bordered,
        shadow === "sm" && styles.shadowSm,
        shadow === "md" && styles.shadowMd,
        shadow === "lg" && styles.shadowLg,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Blurred;
