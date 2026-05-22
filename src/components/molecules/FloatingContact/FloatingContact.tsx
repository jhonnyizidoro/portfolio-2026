import type { FC } from "react";
import Link from "next/link";

import Blurred from "@/components/atoms/Blurred";

import { contacts } from "@/utils/contacts";

import {
  EnvelopeIcon,
  GithubIcon,
  LinkedinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/assets/svg";

import styles from "./FloatingContact.module.scss";

const FloatingContact: FC = () => (
  <Blurred bordered className={styles.wrapper} shadow="lg">
    <Link
      href={`https://wa.me/${contacts.whatsApp.replace("+", "")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <Blurred bordered className={styles.iconWrapper} shadow="sm">
        <WhatsAppIcon className={styles.icon} />
      </Blurred>
    </Link>
    <Link href={`tel:${contacts.phone}`} aria-label="Phone">
      <Blurred bordered className={styles.iconWrapper} shadow="sm">
        <PhoneIcon className={styles.icon} />
      </Blurred>
    </Link>
    <Link href={`mailto:${contacts.email}`} aria-label="Email">
      <Blurred bordered className={styles.iconWrapper} shadow="sm">
        <EnvelopeIcon className={styles.icon} />
      </Blurred>
    </Link>
    <Link
      href={`https://linkedin.com/in/${contacts.linkedin}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <Blurred bordered className={styles.iconWrapper} shadow="sm">
        <LinkedinIcon className={styles.icon} />
      </Blurred>
    </Link>
    <Link
      href={`https://github.com/${contacts.github}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <Blurred bordered className={styles.iconWrapper} shadow="sm">
        <GithubIcon className={styles.icon} />
      </Blurred>
    </Link>
  </Blurred>
);

export default FloatingContact;
