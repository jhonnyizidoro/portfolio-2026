import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { contacts, sectionIds } from "@/constants";

import Blurred from "@/components/atoms/Blurred";
import Container from "@/components/atoms/Container";
import Dot from "@/components/atoms/Dot";
import Pointer from "@/components/atoms/Pointer";
import ScrollButton from "@/components/atoms/ScrollButton";
import ScrollIndicator from "@/components/atoms/ScrollIndicator";

import { cn } from "@/utils/cn";

import {
  ArrowRightIcon,
  ChipIcon,
  ConfigIcon,
  WebPageIcon,
} from "@/assets/svg";
import { getTranslations } from "@/server/i18n";

import Me from "./images/me.jpg";
import styles from "./Introduction.module.scss";

const Introduction: FC = async () => {
  const { intro } = await getTranslations();
  return (
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
          <ArrowRightIcon width={20} className={styles.buttonAccentIcon} />
        </ScrollButton>

        {/* TODO: ideally this would open a modal with contact options */}
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
          {intro.contactButton}
        </Blurred>
      </Blurred>

      <div className={styles.right}>
        <Image
          className={cn(styles.imageCommon, styles.image)}
          src={Me}
          alt=""
        />
        <div
          className={cn(
            styles.imageCommon,
            styles.pattern,
            styles.patternBottom,
          )}
        />
        <div
          className={cn(styles.imageCommon, styles.pattern, styles.patternTop)}
        />

        {/* Floating pills */}
        <div className={cn(styles.pill, styles.leftPill)}>
          <Blurred className={styles.pillContent} shadow="md">
            <WebPageIcon width={20} className={styles.pillIcon} />{" "}
            {intro.frontendPill}
          </Blurred>
          <Pointer direction="right" />
        </div>

        <div className={cn(styles.pill, styles.centerPill)}>
          <Blurred className={styles.pillContent} shadow="md">
            <ConfigIcon width={20} className={styles.pillIcon} />{" "}
            {intro.backendPill}
          </Blurred>
          <Pointer direction="right" />
        </div>

        <div className={cn(styles.pill, styles.rightPill)}>
          <Pointer direction="left" />
          <Blurred className={styles.pillContent} shadow="md">
            <ChipIcon width={20} className={styles.pillIcon} /> {intro.aiPill}
          </Blurred>
        </div>
      </div>

      <ScrollIndicator />
    </Container>
  );
};

export default Introduction;
