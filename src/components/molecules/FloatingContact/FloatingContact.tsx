"use client";

import { type FC } from "react";
import Link from "next/link";

import { contacts } from "@/constants";

import Blurred from "@/components/atoms/Blurred";
import Tooltip from "@/components/atoms/Tooltip";

import { useIsScrolled } from "@/hooks/use-is-scrolled";

import { cn } from "@/utils/cn";

import {
  EnvelopeIcon,
  GithubIcon,
  LinkedinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/assets/svg";
import { useTranslations } from "@/store/i18n";

import styles from "./FloatingContact.module.scss";

const FloatingContact: FC = () => {
  const { floatingContact } = useTranslations();

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
      <Tooltip content={floatingContact.whatsappTooltip}>
        <Blurred
          as={Link}
          hoverable
          className={styles.iconWrapper}
          shadow="sm"
          href={`https://wa.me/${contacts.whatsApp.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={floatingContact.whatsappAriaLabel}
        >
          <WhatsAppIcon aria-hidden="true" width={15} className={styles.icon} />
        </Blurred>
      </Tooltip>

      <Tooltip content={floatingContact.phoneTooltip}>
        <Blurred
          as={Link}
          hoverable
          className={styles.iconWrapper}
          shadow="sm"
          href={`tel:${contacts.phone}`}
          aria-label={floatingContact.phoneAriaLabel}
        >
          <PhoneIcon aria-hidden="true" width={15} className={styles.icon} />
        </Blurred>
      </Tooltip>

      <Tooltip content={floatingContact.emailTooltip}>
        <Blurred
          as={Link}
          hoverable
          className={styles.iconWrapper}
          shadow="sm"
          href={`mailto:${contacts.email}`}
          aria-label={floatingContact.emailAriaLabel}
        >
          <EnvelopeIcon aria-hidden="true" width={15} className={styles.icon} />
        </Blurred>
      </Tooltip>

      <Tooltip content={floatingContact.linkedinTooltip}>
        <Blurred
          as={Link}
          hoverable
          className={styles.iconWrapper}
          shadow="sm"
          href={`https://linkedin.com/in/${contacts.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={floatingContact.linkedinAriaLabel}
        >
          <LinkedinIcon aria-hidden="true" width={15} className={styles.icon} />
        </Blurred>
      </Tooltip>

      <Tooltip content={floatingContact.githubTooltip}>
        <Blurred
          as={Link}
          hoverable
          className={styles.iconWrapper}
          shadow="sm"
          href={`https://github.com/${contacts.github}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={floatingContact.githubAriaLabel}
        >
          <GithubIcon aria-hidden="true" width={15} className={styles.icon} />
        </Blurred>
      </Tooltip>
    </Blurred>
  );
};

export default FloatingContact;
