"use client";

import { type FC } from "react";

import { getSkillYears } from "@/utils/getSkillYears";

import { Messages } from "@/@types/i18n";

type Props = {
  skill: string;
  experiences: Messages["experience"]["experiences"];
};

const SkillYears: FC<Props> = ({ experiences, skill }) => (
  <>{getSkillYears(skill, experiences)}yr</>
);

export default SkillYears;
