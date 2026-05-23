import { Messages } from "@/@types/i18n";

const MONTHS = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
} as const;

const parseMonthYear = (dateStr: string) => {
  const [month, year] = dateStr.split(" ");
  return new Date(Number(year), MONTHS[month as keyof typeof MONTHS], 1);
};

export const getSkillYears = (
  skill: string,
  experiences: Messages["experiences"],
  now = Date.now(),
) => {
  const oldest = experiences
    .filter((exp) => exp.stack.includes(skill))
    .map((exp) => parseMonthYear(exp.from).getTime())
    .reduce((min, t) => (t < min ? t : min), Infinity);

  if (!isFinite(oldest)) return 0;

  const years = (now - oldest) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.ceil(years);
};
