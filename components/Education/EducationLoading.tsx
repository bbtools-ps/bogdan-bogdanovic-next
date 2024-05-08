"use client";

import { useTranslation } from "react-i18next";

export default function EducationLoading() {
  const { t } = useTranslation();

  return <p className="animate-pulse">{t("LoadingEducation_Label")}</p>;
}
