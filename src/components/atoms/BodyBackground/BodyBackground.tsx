import type { FC } from "react";
import Image from "next/image";

import { cn } from "@/utils/cn";

import Waves from "./images/background-waves.svg";
import styles from "./BodyBackground.module.scss";

const BodyBackground: FC = () => (
  <div className={styles.wrapper}>
    <Image src={Waves} className={cn(styles.wave, styles.backWave)} alt="" />
    <Image src={Waves} className={cn(styles.wave, styles.frontWave)} alt="" />
    <div className={styles.blur}></div>
  </div>
);

export default BodyBackground;
