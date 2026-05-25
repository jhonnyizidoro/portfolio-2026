import type { FC, PropsWithChildren } from "react";

import styles from "./Tooltip.module.scss";

type Props = {
  content: string;
};

const Tooltip: FC<PropsWithChildren<Props>> = ({ children, content }) => (
  <div className={styles.wrapper}>
    <label className={styles.tooltip}>{content}</label>
    {children}
  </div>
);

export default Tooltip;
