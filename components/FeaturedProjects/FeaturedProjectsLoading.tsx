"use client";

import { useTranslation } from "react-i18next";

export default function FeaturedProjectsLoading() {
  const { t } = useTranslation();

  return <p className="animate-pulse">{t("LoadingProjects_Label")}</p>;
}
