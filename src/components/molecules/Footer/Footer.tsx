import type { FC } from "react";
import Link from "next/link";

import { contacts } from "@/constants";

import { SphereIcon } from "@/assets/svg";
import { getTranslations } from "@/server/i18n";

import styles from "./Footer.module.scss";

const Footer: FC = async () => {
  const { footer } = await getTranslations();

  return (
    <footer className={styles.footer}>
      <SphereIcon className={styles.sphere} />

      <h2 className={styles.title}>{footer.title}</h2>

      <Link
        className={styles.link}
        href={`tel:${contacts.phone}`}
        aria-label={footer.phoneAriaLabel}
      >
        {contacts.phone}
      </Link>

      <Link
        className={styles.link}
        href={`mailto:${contacts.email}`}
        aria-label={footer.emailAriaLabel}
      >
        {contacts.email}
      </Link>

      <Link
        className={styles.link}
        href={`https://linkedin.com/in/${contacts.linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={footer.linkedinAriaLabel}
      >
        linkedin.com/{contacts.linkedin}
      </Link>

      <Link
        className={styles.link}
        href="https://docs.google.com/document/d/1DOoo0oMmXy4Fwi2jtwc0GDCC3HIV8xevmEEq1PtNWc4/export?format=pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={footer.resumeAriaLabel}
      >
        <strong className={styles.linkStrong}>{footer.resumeDownload}</strong>{" "}
        {footer.resumeSuffix}
      </Link>
    </footer>
  );
};

export default Footer;
