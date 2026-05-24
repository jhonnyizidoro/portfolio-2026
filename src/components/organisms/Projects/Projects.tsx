import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Blurred from "@/components/atoms/Blurred";
import Container from "@/components/atoms/Container";

import { ArrowRightIcon, ForkIcon } from "@/assets/svg";

import SevenPlaceLogo from "./images/7place.png";
import FoxLogo from "./images/fox.png";
import GloboLogo from "./images/globo.png";
import RadarGestaoLogo from "./images/radargestao.png";
import ShiftCarLogo from "./images/shiftcar.png";
import WorldpulseLogo from "./images/worldpulse.png";
import styles from "./Projects.module.scss";

// TODO: update links and aria-labels
// TODO: normalize logos sizes in UI
const Projects: FC = () => (
  <Container className={styles.container}>
    <Blurred className={styles.card} shadow="lg">
      <h2 className={styles.title}>
        Some <strong className={styles.titleGreen}>projects</strong> I built
      </h2>
      <p className={styles.subtitle}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Necessitatibus, pariatur.
      </p>

      <div className={styles.wrapper}>
        <Blurred bordered className={styles.itemCard}>
          <Image src={FoxLogo} alt="Fox" height={30} />
          <p className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>

          <Blurred
            as={Link}
            bordered
            href="https://www.foxlocal.com/"
            className={styles.link}
            shadow="sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Fox Local Website to know"
          >
            See more
            <ArrowRightIcon width={20} className={styles.linkIcon} />
          </Blurred>
        </Blurred>

        <Blurred bordered className={styles.itemCard}>
          <Image src={GloboLogo} alt="Fox" height={30} />
          <p className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>

          <Blurred
            as={Link}
            bordered
            href="https://www.foxlocal.com/"
            className={styles.link}
            shadow="sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Fox Local Website to know"
          >
            See more
            <ArrowRightIcon width={20} className={styles.linkIcon} />
          </Blurred>
        </Blurred>

        <Blurred bordered className={styles.itemCard}>
          <Image src={WorldpulseLogo} alt="Fox" height={30} />
          <p className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>

          <Blurred
            as={Link}
            bordered
            href="https://www.foxlocal.com/"
            className={styles.link}
            shadow="sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Fox Local Website to know"
          >
            See more
            <ArrowRightIcon width={20} className={styles.linkIcon} />
          </Blurred>
        </Blurred>

        <Blurred bordered className={styles.itemCard}>
          <Image src={RadarGestaoLogo} alt="Fox" height={30} />
          <p className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>

          <Blurred
            as={Link}
            bordered
            href="https://www.foxlocal.com/"
            className={styles.link}
            shadow="sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Fox Local Website to know"
          >
            See more
            <ArrowRightIcon width={20} className={styles.linkIcon} />
          </Blurred>
        </Blurred>

        <Blurred bordered className={styles.itemCard}>
          <Image src={SevenPlaceLogo} alt="Fox" height={30} />
          <p className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>

          <Blurred
            as={Link}
            bordered
            href="https://www.foxlocal.com/"
            className={styles.link}
            shadow="sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Fox Local Website to know"
          >
            See more
            <ArrowRightIcon width={20} className={styles.linkIcon} />
          </Blurred>
        </Blurred>

        <Blurred bordered className={styles.itemCard}>
          <Image src={ShiftCarLogo} alt="Fox" height={30} />
          <p className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>

          <Blurred
            as={Link}
            bordered
            href="https://www.foxlocal.com/"
            className={styles.link}
            shadow="sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Fox Local Website to know"
          >
            See more
            <ArrowRightIcon width={20} className={styles.linkIcon} />
          </Blurred>
        </Blurred>
      </div>
    </Blurred>

    <Blurred className={styles.card} shadow="lg">
      <h2 className={styles.title}>
        <strong className={styles.titlePurple}>Open source</strong> projects
      </h2>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Necessitatibus, pariatur.
      </p>

      <div className={styles.repositoriesWrapper}>
        <Blurred bordered className={styles.itemCard}>
          <div className={styles.header}>
            <ForkIcon width={20} className={styles.headerIcon} />
            jhonnyizidoro/strapi-generate-types 
          </div>

          <p className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>

          <Blurred
            as={Link}
            bordered
            href="https://www.foxlocal.com/"
            className={styles.link}
            shadow="sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Fox Local Website to know"
          >
            See more
            <ArrowRightIcon width={20} className={styles.linkIcon} />
          </Blurred>
        </Blurred>

        <Blurred bordered className={styles.itemCard}>
          <div className={styles.header}>
            <ForkIcon width={20} className={styles.headerIcon} />
            jhonnyizidoro/strapi-generate-types 
          </div>

          <p className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>

          <Blurred
            as={Link}
            bordered
            href="https://www.foxlocal.com/"
            className={styles.link}
            shadow="sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Fox Local Website to know"
          >
            See more
            <ArrowRightIcon width={20} className={styles.linkIcon} />
          </Blurred>
        </Blurred>
      </div>
    </Blurred>
  </Container>
);

export default Projects;
