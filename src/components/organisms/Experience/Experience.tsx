import type { FC } from "react";

import Blurred from "@/components/atoms/Blurred";
import Container from "@/components/atoms/Container";
import Dot from "@/components/atoms/Dot";

import { cn } from "@/utils/cn";

import { SphereIcon } from "@/assets/svg";
import { getTranslations } from "@/server/i18n";

import styles from "./Experience.module.scss";

const Experience: FC = async () => {
  const t = await getTranslations();

  return (
    <div className={styles.containerWrapper}>
      <SphereIcon className={styles.sphere} />
      <Container className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.wrapper}>
          {t.experiences.map((xp, i) => (
            <Blurred
              shadow="lg"
              className={cn(
                styles.card,
                i % 2 === 0 && styles.cardLeft,
                i % 2 !== 0 && styles.cardRight,
              )}
              key={xp.company}
            >
              <div className={styles.header}>
                <div>
                  <h3 className={styles.role}>{xp.role}</h3>
                  <h4 className={styles.company}>{xp.company}</h4>
                </div>
                <Blurred bordered shadow="sm" className={styles.date}>
                  {xp.from} {xp.to && `- ${xp.to}`}
                </Blurred>
              </div>

              {xp.achievements.map((ac, i) => (
                <p key={`${xp.company}_ac_${i}`} className={styles.achievement}>
                  <Dot /> {ac}
                </p>
              ))}

              {/* TODO: vizabli stack has 4 items, reduce to 3 or change the others to 4 also */}
              <div className={styles.stackWrapper}>
                <ul className={styles.stack}>
                  <li className={styles.stackTitle}>Stack: </li>
                  {xp.stack.map((st, i) => (
                    <li
                      className={styles.stackItem}
                      key={`${xp.company}_st_${st}`}
                    >
                      {st}
                      {i < xp.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
              </div>
            </Blurred>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Experience;
