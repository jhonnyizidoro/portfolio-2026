"use client";

import { type FC } from "react";
import Link from "next/link";

import { contacts } from "@/constants";

import Blurred from "@/components/atoms/Blurred";

import { useIsScrolled } from "@/hooks/use-is-scrolled";

import { cn } from "@/utils/cn";

import {
  EnvelopeIcon,
  GithubIcon,
  LinkedinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/assets/svg";
import { useI18n } from "@/store/i18n";

import styles from "./FloatingContact.module.scss";

const FloatingContact: FC = () => {
  const { t } = useI18n();
  const scrolled = useIsScrolled({
    offset: 200,
    resetOnZeroOnly: true,
  });

  return (
    <Blurred
      bordered
      className={cn(styles.wrapper, scrolled && styles.wrapperScrolled)}
      shadow="lg"
    >
      <Blurred
        as={Link}
        className={styles.iconWrapper}
        shadow="sm"
        href={`https://wa.me/${contacts.whatsApp.replace("+", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floatingContact.whatsappAriaLabel}
      >
        <WhatsAppIcon width={15} className={styles.icon} />
      </Blurred>

      <Blurred
        as={Link}
        className={styles.iconWrapper}
        shadow="sm"
        href={`tel:${contacts.phone}`}
        aria-label={t.floatingContact.phoneAriaLabel}
      >
        <PhoneIcon width={15} className={styles.icon} />
      </Blurred>

      <Blurred
        as={Link}
        className={styles.iconWrapper}
        shadow="sm"
        href={`mailto:${contacts.email}`}
        aria-label={t.floatingContact.emailAriaLabel}
      >
        <EnvelopeIcon width={15} className={styles.icon} />
      </Blurred>

      <Blurred
        as={Link}
        className={styles.iconWrapper}
        shadow="sm"
        href={`https://linkedin.com/in/${contacts.linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floatingContact.linkedinAriaLabel}
      >
        <LinkedinIcon width={15} className={styles.icon} />
      </Blurred>

      <Blurred
        as={Link}
        className={styles.iconWrapper}
        shadow="sm"
        href={`https://github.com/${contacts.github}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floatingContact.githubAriaLabel}
      >
        <GithubIcon width={15} className={styles.icon} />
      </Blurred>
    </Blurred>
  );
};

export default FloatingContact;
