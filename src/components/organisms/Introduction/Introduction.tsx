import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Blurred from "@/components/atoms/Blurred";
import Container from "@/components/atoms/Container";
import Dot from "@/components/atoms/Dot";
import Pointer from "@/components/atoms/Pointer";
import ScrollIndicator from "@/components/atoms/ScrollIndicator";

import { cn } from "@/utils/cn";
import { contacts, sectionIds } from "@/utils/constants";

import {
  ArrowRightIcon,
  ChipIcon,
  ConfigIcon,
  WebPageIcon,
} from "@/assets/svg";

import Me from "./images/me.jpg";
import styles from "./Introduction.module.scss";

const Introduction: FC = () => (
  <Container className={styles.container} id={sectionIds.intro}>
    <Blurred className={styles.left} shadow="md">
      <Blurred className={styles.heading} shadow="sm">
        <Dot /> Senior Frontend / Fullstack engineer
      </Blurred>

      <h1 className={styles.title}>
        Hello, I&apos;m <strong className={styles.myName}>Jhonny</strong>
      </h1>
      <p className={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s
      </p>

      <Link
        className={cn(styles.button, styles.buttonAccent)}
        href={`#${sectionIds.aboutMe}`}
      >
        Know me
        <ArrowRightIcon width={20} className={styles.buttonAccentIcon} />
      </Link>
      <Blurred
        bordered
        className={styles.button}
        as={Link}
        shadow="sm"
        href={`https://wa.me/${contacts.whatsApp.replace("+", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        Get in touch
      </Blurred>
    </Blurred>

    <div className={styles.right}>
      <Image className={cn(styles.imageCommon, styles.image)} src={Me} alt="" />
      <div
        className={cn(styles.imageCommon, styles.pattern, styles.patternBottom)}
      />
      <div
        className={cn(styles.imageCommon, styles.pattern, styles.patternTop)}
      />

      {/* Floating pills */}
      <div className={cn(styles.pill, styles.leftPill)}>
        <Blurred className={styles.pillContent} shadow="md">
          <WebPageIcon width={20} className={styles.pillIcon} /> Frontend
          engineer
        </Blurred>
        <Pointer direction="right" />
      </div>

      <div className={cn(styles.pill, styles.centerPill)}>
        <Blurred className={styles.pillContent} shadow="md">
          <ConfigIcon width={20} className={styles.pillIcon} /> Backend
          Developer
        </Blurred>
        <Pointer direction="right" />
      </div>

      <div className={cn(styles.pill, styles.rightPill)}>
        <Pointer direction="left" />
        <Blurred className={styles.pillContent} shadow="md">
          <ChipIcon width={20} className={styles.pillIcon} /> AI Orchestrator
        </Blurred>
      </div>
    </div>

    <ScrollIndicator />
  </Container>
);

export default Introduction;
