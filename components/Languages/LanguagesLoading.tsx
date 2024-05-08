"use client";

import { useTranslation } from "react-i18next";

export default function LanguagesLoading() {
  const { t } = useTranslation();

  return <p className="animate-pulse">{t("LoadingLanguages_Label")}</p>;
}
