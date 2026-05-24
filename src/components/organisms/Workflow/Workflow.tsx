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
import { getTranslations } from "@/server/i18n";

import styles from "./Workflow.module.scss";

const Workflow: FC = async () => {
  const { workflow } = await getTranslations();

  return (
    <Container size="md" className={styles.container}>
      <h2 className={styles.title}>{workflow.title}</h2>
      <p className={styles.text}>
        <Dot /> {workflow.text}
      </p>
      <div className={styles.wrapper}>
        <div className={styles.itemWrapper}>
          <Blurred className={styles.item} shadow="lg">
            <LampIcon height={20} width={20} />
            {workflow.brainstorm}
          </Blurred>
        </div>
        <div className={cn(styles.itemWrapper, styles.itemWrapperEven)}>
          <Blurred className={styles.item} shadow="lg">
            <CodeIcon height={20} width={20} />
            {workflow.aiPairing}
          </Blurred>
        </div>
        <div className={styles.itemWrapper}>
          <Blurred className={styles.item} shadow="lg">
            <EyeIcon height={20} width={20} />
            {workflow.codeReview}
          </Blurred>
        </div>
        <div className={cn(styles.itemWrapper, styles.itemWrapperEven)}>
          <Blurred className={styles.item} shadow="lg">
            <TestIcon height={20} width={20} />
            {workflow.tests}
          </Blurred>
        </div>
        <div className={styles.itemWrapper}>
          <Blurred className={styles.item} shadow="lg">
            <LightningIcon height={20} width={20} />
            {workflow.pullRequest}
          </Blurred>
        </div>
      </div>
    </Container>
  );
};

export default Workflow;
