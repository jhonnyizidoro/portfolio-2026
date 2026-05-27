import type { FC } from "react";
import Image from "next/image";

import { sectionIds } from "@/constants";

import Blurred from "@/components/atoms/Blurred";
import Container from "@/components/atoms/Container";
import Dot from "@/components/atoms/Dot";
import Pointer from "@/components/atoms/Pointer";
import ScrollButton from "@/components/atoms/ScrollButton";
import ScrollIndicator from "@/components/atoms/ScrollIndicator";
import IntroductionContactButton from "@/components/molecules/IntroductionContactButton";

import { cn } from "@/utils/cn";

import { Messages } from "@/@types/i18n";
import {
  ArrowRightIcon,
  ChipIcon,
  ConfigIcon,
  WebPageIcon,
} from "@/assets/svg";

import Me from "./images/me.jpg";
import styles from "./Introduction.module.scss";

type Props = {
  intro: Messages["intro"];
};

const Introduction: FC<Props> = ({ intro }) => (
  <Container className={styles.container} id={sectionIds.intro}>
    <Blurred className={styles.left} shadow="md">
      <Blurred className={styles.heading} shadow="sm">
        <Dot /> {intro.heading}
      </Blurred>

      <h1 className={styles.title}>
        {intro.greeting} <strong className={styles.myName}>Jhonny</strong>
      </h1>
      <p className={styles.text}>{intro.text}</p>

      <ScrollButton
        scrollTarget={sectionIds.aboutMe}
        className={cn(styles.button, styles.buttonAccent)}
        type="button"
      >
        {intro.scrollButton}
        <ArrowRightIcon
          aria-hidden="true"
          width={20}
          className={styles.buttonAccentIcon}
        />
      </ScrollButton>

      <IntroductionContactButton className={styles.button} />
    </Blurred>

    <div className={styles.right}>
      <Image
        className={cn(styles.imageCommon, styles.image)}
        src={Me}
        alt={intro.profileImageAlt}
      />
      <div
        className={cn(styles.imageCommon, styles.pattern, styles.patternBottom)}
      />
      <div
        className={cn(styles.imageCommon, styles.pattern, styles.patternTop)}
      />

      {/* Floating pills */}
      <div className={cn(styles.pill, styles.leftPill)}>
        <Blurred className={styles.pillContent} shadow="md">
          <WebPageIcon
            aria-hidden="true"
            width={20}
            className={styles.pillIcon}
          />
          {intro.frontendPill}
        </Blurred>
        <Pointer direction="right" responsive />
      </div>

      <div className={cn(styles.pill, styles.centerPill)}>
        <Blurred className={styles.pillContent} shadow="md">
          <ConfigIcon
            aria-hidden="true"
            width={20}
            className={styles.pillIcon}
          />
          {intro.backendPill}
        </Blurred>
        <Pointer direction="right" responsive />
      </div>

      <div className={cn(styles.pill, styles.rightPill)}>
        <Pointer direction="left" responsive mobileDirection="right" />
        <Blurred className={styles.pillContent} shadow="md">
          <ChipIcon aria-hidden="true" width={20} className={styles.pillIcon} />{" "}
          {intro.aiPill}
        </Blurred>
      </div>
    </div>

    <ScrollIndicator />
  </Container>
);

export default Introduction;
