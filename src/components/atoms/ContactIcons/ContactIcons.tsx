import type { FC } from "react";
import Link from "next/link";

import { contacts } from "@/constants";

import { cn } from "@/utils/cn";

import {
  EnvelopeIcon,
  GithubIcon,
  LinkedinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/assets/svg";
import { useTranslations } from "@/store/i18n";

import Blurred from "../Blurred";
import Tooltip from "../Tooltip";

import styles from "./ContactIcons.module.scss";

type Props = {
  className?: string;
};

const ContactIcons: FC<Props> = ({ className }) => {
  const { contactIcons } = useTranslations();

  return (
    <Blurred bordered className={cn(styles.wrapper, className)} shadow="lg">
      <Tooltip content={contactIcons.whatsappTooltip}>
        <Blurred
          as={Link}
          hoverable
          className={styles.iconWrapper}
          shadow="sm"
          href={`https://wa.me/${contacts.whatsApp.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={contactIcons.whatsappAriaLabel}
        >
          <WhatsAppIcon aria-hidden="true" width={15} className={styles.icon} />
        </Blurred>
      </Tooltip>

      <Tooltip content={contactIcons.phoneTooltip}>
        <Blurred
          as={Link}
          hoverable
          className={styles.iconWrapper}
          shadow="sm"
          href={`tel:${contacts.phone}`}
          aria-label={contactIcons.phoneAriaLabel}
        >
          <PhoneIcon aria-hidden="true" width={15} className={styles.icon} />
        </Blurred>
      </Tooltip>

      <Tooltip content={contactIcons.emailTooltip}>
        <Blurred
          as={Link}
          hoverable
          className={styles.iconWrapper}
          shadow="sm"
          href={`mailto:${contacts.email}`}
          aria-label={contactIcons.emailAriaLabel}
        >
          <EnvelopeIcon aria-hidden="true" width={15} className={styles.icon} />
        </Blurred>
      </Tooltip>

      <Tooltip content={contactIcons.linkedinTooltip}>
        <Blurred
          as={Link}
          hoverable
          className={styles.iconWrapper}
          shadow="sm"
          href={`https://linkedin.com/in/${contacts.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={contactIcons.linkedinAriaLabel}
        >
          <LinkedinIcon aria-hidden="true" width={15} className={styles.icon} />
        </Blurred>
      </Tooltip>

      <Tooltip content={contactIcons.githubTooltip}>
        <Blurred
          as={Link}
          hoverable
          className={styles.iconWrapper}
          shadow="sm"
          href={`https://github.com/${contacts.github}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={contactIcons.githubAriaLabel}
        >
          <GithubIcon aria-hidden="true" width={15} className={styles.icon} />
        </Blurred>
      </Tooltip>
    </Blurred>
  );
};

export default ContactIcons;
