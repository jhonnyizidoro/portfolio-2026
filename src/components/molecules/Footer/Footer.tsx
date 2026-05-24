import type { FC } from "react";
import Link from "next/link";

import { contacts } from "@/constants";

import { SphereIcon } from "@/assets/svg";

import styles from "./Footer.module.scss";

const Footer: FC = () => (
  <footer className={styles.footer}>
    <SphereIcon className={styles.sphere} />

    <h2 className={styles.title}>Get in touch</h2>

    <Link
      className={styles.link}
      href={`tel:${contacts.phone}`}
      aria-label="Phone"
    >
      {contacts.phone}
    </Link>

    <Link
      className={styles.link}
      href={`mailto:${contacts.email}`}
      aria-label="Email"
    >
      {contacts.email}
    </Link>

    <Link
      className={styles.link}
      href={`https://linkedin.com/in/${contacts.linkedin}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      linkedin.com/{contacts.linkedin}
    </Link>

    <Link
      className={styles.link}
      href="https://docs.google.com/document/d/1DOoo0oMmXy4Fwi2jtwc0GDCC3HIV8xevmEEq1PtNWc4/export?format=pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download my resume"
    >
      <strong className={styles.linkStrong}>Download</strong> my resume
    </Link>
  </footer>
);

export default Footer;
