import type { FC, PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

import styles from "./Container.module.scss";

type Props = {
  className?: string;
  id?: string;
};

const Container: FC<PropsWithChildren<Props>> = ({ className, children }) => (
  <div className={cn(className, styles.container)}>{children}</div>
);

export default Container;
