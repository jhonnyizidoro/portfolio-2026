import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Blurred from "@/components/atoms/Blurred";
import Container from "@/components/atoms/Container";
import OnScreen from "@/components/atoms/OnScreen";

import { Messages } from "@/@types/i18n";
import { ArrowRightIcon, ForkIcon } from "@/assets/svg";

import SevenPlaceLogo from "./images/7place.png";
import FoxLogo from "./images/fox.png";
import GloboLogo from "./images/globo.png";
import RadarGestaoLogo from "./images/radargestao.png";
import ShiftCarLogo from "./images/shiftcar.png";
import WorldpulseLogo from "./images/worldpulse.png";
import styles from "./Projects.module.scss";

type Props = {
  projects: Messages["projects"];
};

const Projects: FC<Props> = ({ projects }) => (
  <Container className={styles.container}>
    <OnScreen
      className={styles.pattern}
      hiddenClassName={styles.patternBottom}
      onScreenClassName={styles.patternBottomVisible}
    />
    <OnScreen
      className={styles.pattern}
      hiddenClassName={styles.patternTop}
      onScreenClassName={styles.patternTopVisible}
    />

    <Blurred className={styles.card} shadow="lg">
      <h2 className={styles.title}>
        Some <strong className={styles.titleGreen}>projects</strong> I built
      </h2>
      <p className={styles.subtitle}>{projects.builtSubtitle}</p>

      <div className={styles.wrapper}>
        <Blurred bordered className={styles.itemCard}>
          <Image src={FoxLogo} alt="Fox" height={30} />
          <p className={styles.text}>{projects.foxText}</p>
          <Blurred
            as={Link}
            hoverable
            bordered
            href="https://www.foxlocal.com/"
            className={styles.link}
            shadow="sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={projects.foxAriaLabel}
          >
            {projects.seeMore}
            <ArrowRightIcon
              aria-hidden="true"
              width={20}
              className={styles.linkIcon}
            />
          </Blurred>
        </Blurred>

        <Blurred bordered className={styles.itemCard}>
          <Image src={GloboLogo} alt="Globoplay" height={30} />
          <p className={styles.text}>{projects.globoplayText}</p>
          <Blurred
            as={Link}
            hoverable
            bordered
            href="https://globoplay.globo.com/"
            className={styles.link}
            shadow="sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={projects.globoplayAriaLabel}
          >
            {projects.seeMore}
            <ArrowRightIcon
              aria-hidden="true"
              width={20}
              className={styles.linkIcon}
            />
          </Blurred>
        </Blurred>

        <Blurred bordered className={styles.itemCard}>
          <Image
            src={WorldpulseLogo}
            alt="World Pulse"
            height={30}
            className={styles.logoGrow}
          />
          <p className={styles.text}>{projects.worldpulseText}</p>
          <Blurred
            as={Link}
            hoverable
            bordered
            href="https://www.worldpulse.org/"
            className={styles.link}
            shadow="sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={projects.worldpulseAriaLabel}
          >
            {projects.seeMore}
            <ArrowRightIcon
              aria-hidden="true"
              width={20}
              className={styles.linkIcon}
            />
          </Blurred>
        </Blurred>

        <Blurred bordered className={styles.itemCard}>
          <Image src={RadarGestaoLogo} alt="Radar Gestão" height={30} />
          <p className={styles.text}>{projects.radargestaoText}</p>
          <Blurred
            as={Link}
            hoverable
            bordered
            href="https://radardagestao.com.br/"
            className={styles.link}
            shadow="sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={projects.radargestaoAriaLabel}
          >
            {projects.seeMore}
            <ArrowRightIcon
              aria-hidden="true"
              width={20}
              className={styles.linkIcon}
            />
          </Blurred>
        </Blurred>

        <Blurred bordered className={styles.itemCard}>
          <Image src={SevenPlaceLogo} alt="7Place" height={30} />
          <p className={styles.text}>{projects.sevenplaceText}</p>
          <Blurred
            as={Link}
            hoverable
            bordered
            href="https://www.7place.com.br/"
            className={styles.link}
            shadow="sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={projects.sevenplaceAriaLabel}
          >
            {projects.seeMore}
            <ArrowRightIcon
              aria-hidden="true"
              width={20}
              className={styles.linkIcon}
            />
          </Blurred>
        </Blurred>

        <Blurred bordered className={styles.itemCard}>
          <Image
            src={ShiftCarLogo}
            alt="Shift Car"
            height={30}
            className={styles.logoShrink}
          />
          <p className={styles.text}>{projects.shiftcarText}</p>
          <Blurred
            as={Link}
            hoverable
            bordered
            href="https://www.shiftcar.com.br/"
            className={styles.link}
            shadow="sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={projects.shiftcarAriaLabel}
          >
            {projects.seeMore}
            <ArrowRightIcon
              aria-hidden="true"
              width={20}
              className={styles.linkIcon}
            />
          </Blurred>
        </Blurred>
      </div>
    </Blurred>

    <Blurred className={styles.card} shadow="lg">
      <h2 className={styles.title}>
        <strong className={styles.titlePurple}>Open source</strong> projects
      </h2>
      <p className={styles.text}>{projects.openSourceSubtitle}</p>

      <div className={styles.repositoriesWrapper}>
        <Blurred bordered className={styles.itemCard}>
          <div className={styles.header}>
            <ForkIcon
              aria-hidden="true"
              width={20}
              className={styles.headerIcon}
            />
            jhonnyizidoro/strapi-generate-types
          </div>
          <p className={styles.text}>{projects.strapiGenerateTypesText}</p>
          <Blurred
            as={Link}
            hoverable
            bordered
            href="https://github.com/jhonnyizidoro/strapi-generate-types"
            className={styles.link}
            shadow="sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={projects.strapiGenerateTypesAriaLabel}
          >
            {projects.seeMore}
            <ArrowRightIcon
              aria-hidden="true"
              width={20}
              className={styles.linkIcon}
            />
          </Blurred>
        </Blurred>

        <Blurred bordered className={styles.itemCard}>
          <div className={styles.header}>
            <ForkIcon
              aria-hidden="true"
              width={20}
              className={styles.headerIcon}
            />
            jhonnyizidoro/marriage
          </div>
          <p className={styles.text}>{projects.marriageText}</p>
          <Blurred
            as={Link}
            hoverable
            bordered
            href="https://github.com/jhonnyizidoro/marriage"
            className={styles.link}
            shadow="sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={projects.marriageAriaLabel}
          >
            {projects.seeMore}
            <ArrowRightIcon
              aria-hidden="true"
              width={20}
              className={styles.linkIcon}
            />
          </Blurred>
        </Blurred>
      </div>
    </Blurred>
  </Container>
);

export default Projects;
