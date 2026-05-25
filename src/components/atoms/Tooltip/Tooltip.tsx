import type { FC, PropsWithChildren, ReactElement } from "react";
import { Children, cloneElement, isValidElement, useId } from "react";

import styles from "./Tooltip.module.scss";

type Props = {
  content: string;
};

const Tooltip: FC<PropsWithChildren<Props>> = ({ children, content }) => {
  const id = useId();
  const child = Children.only(children);
  const enhancedChild = isValidElement(child)
    ? cloneElement(child as ReactElement<Record<string, unknown>>, {
        "aria-describedby": id,
      })
    : child;

  return (
    <div className={styles.wrapper}>
      <span role="tooltip" id={id} className={styles.tooltip}>
        {content}
      </span>
      {enhancedChild}
    </div>
  );
};

export default Tooltip;
