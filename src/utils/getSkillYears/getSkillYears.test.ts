import { describe, expect, it } from "vitest";

import { getSkillYears } from "./getSkillYears";

const JAN_2020 = new Date(2020, 0, 1).getTime();
const JAN_2022 = new Date(2022, 0, 1).getTime();

const exp = (from: string, stack: string[]) => ({
  company: "",
  role: "",
  from,
  to: "",
  achievements: [],
  stack,
});

const experiences = [
  exp("Jan 2022", ["React", "Node.js"]),
  exp("Jan 2020", ["React", "GraphQL"]),
  exp("Jun 2023", ["Next.js"]),
];

describe("getSkillYears", () => {
  it("returns 0 when skill not found in any experience", () => {
    expect(getSkillYears("Vue", experiences, JAN_2022)).toBe(0);
  });

  it("uses oldest experience when skill appears in multiple", () => {
    // React in Jan 2022 and Jan 2020 — oldest is Jan 2020
    // 1827 days / 365.25 = 5.001 → ceil = 6
    const now = new Date(2025, 0, 1).getTime();
    expect(getSkillYears("React", experiences, now)).toBe(6);
  });

  it("uses single matching experience", () => {
    // Jun 2023 to Jun 2025 = 731 days / 365.25 = 2.001 → ceil = 3
    const now = new Date(2025, 5, 1).getTime();
    expect(getSkillYears("Next.js", experiences, now)).toBe(3);
  });

  it("ceils partial years", () => {
    // Jan 2020 to Jul 2021 = 547 days / 365.25 = 1.496 → ceil = 2
    const now = new Date(2021, 6, 1).getTime();
    expect(getSkillYears("GraphQL", experiences, now)).toBe(2);
  });

  it("returns 1 for skill used less than a full year ago", () => {
    const sameMonthExp = [exp("Jan 2025", ["TypeScript"])];
    const now = new Date(2025, 0, 15).getTime();
    expect(getSkillYears("TypeScript", sameMonthExp, now)).toBe(1);
  });

  it("handles empty experiences array", () => {
    expect(getSkillYears("React", [], JAN_2020)).toBe(0);
  });
});
