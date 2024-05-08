"use client";

import { useTranslation } from "react-i18next";

export default function TechnologiesUsedHeader() {
  const { t } = useTranslation();

  return <p className="mb-4">{t("ProjectTechnologiesUsed_Label")}</p>;
}
