"use client";

import { useTranslation } from "react-i18next";

export default function PresentDate() {
  const { t } = useTranslation();

  return <span>{t("WorkExperiencePresent_Label")}</span>;
}
