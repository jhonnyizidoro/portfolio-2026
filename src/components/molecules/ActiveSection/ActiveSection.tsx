"use client";

import { type FC, useEffect, useState } from "react";

import { sectionIds } from "@/constants";

import Blurred from "@/components/atoms/Blurred";
import Dot from "@/components/atoms/Dot";

import styles from "./ActiveSection.module.scss";

const ids = Object.values(sectionIds);
const selector = ids.map((id) => `#${id}`).join(",");

const ActiveSection: FC = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(selector);
    const midpoint = window.innerHeight / 2;

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= midpoint) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!activeSection) {
    return;
  }

  return (
    <Blurred className={styles.pill}>
      <Dot /> Current section: {activeSection}
    </Blurred>
  );
};

export default ActiveSection;
