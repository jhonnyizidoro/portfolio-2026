import type { FC } from "react";

import Blurred from "@/components/atoms/Blurred";
import Container from "@/components/atoms/Container";
import Dot from "@/components/atoms/Dot";

import { cn } from "@/utils/cn";

import {
  CodeIcon,
  EyeIcon,
  LampIcon,
  LightningIcon,
  TestIcon,
} from "@/assets/svg";

import styles from "./Workflow.module.scss";

const Workflow: FC = () => (
  <Container size="md" className={styles.container}>
    <h2 className={styles.title}>AI Integrated Workflow</h2>
    <p className={styles.text}>
      <Dot /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
      dolor! Accusantium doloremque ea iste eum, alias quisquam reiciendis
      laborum, eius quasi veritatis ducimus corrupti corporis ipsum aliquam,
      distinctio placeat facilis! Vel dolorum reprehenderit ea similique aliquam
      quibusdam, incidunt quod quaerat, in maxime doloribus! Ipsa in recusandae,
      officiis
    </p>
    <div className={styles.wrapper}>
      <div className={styles.itemWrapper}>
        <Blurred className={styles.item} shadow="lg">
          <LampIcon height={20} width={20} />
          Brainstorm and plan
        </Blurred>
      </div>
      <div className={cn(styles.itemWrapper, styles.itemWrapperEven)}>
        <Blurred className={styles.item} shadow="lg">
          <CodeIcon height={20} width={20} />
          AI pair programming
        </Blurred>
      </div>
      <div className={styles.itemWrapper}>
        <Blurred className={styles.item} shadow="lg">
          <EyeIcon height={20} width={20} />
          Code review
        </Blurred>
      </div>
      <div className={cn(styles.itemWrapper, styles.itemWrapperEven)}>
        <Blurred className={styles.item} shadow="lg">
          <TestIcon height={20} width={20} />
          Write automated tests
        </Blurred>
      </div>
      <div className={styles.itemWrapper}>
        <Blurred className={styles.item} shadow="lg">
          <LightningIcon height={20} width={20} />
          Open pull request
        </Blurred>
      </div>
    </div>
  </Container>
);

export default Workflow;
