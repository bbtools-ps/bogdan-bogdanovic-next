"use client";

import { useTranslation } from "react-i18next";

export default function WorkExperienceLoading() {
  const { t } = useTranslation();

  return <p className="animate-pulse">{t("LoadingWorkExperience_Label")}</p>;
}
