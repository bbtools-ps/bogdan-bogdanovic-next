"use client";

import { useTranslation } from "react-i18next";

export default function LanguagesHeader() {
  const { t } = useTranslation();

  return <h2 className="mb-4 md:mb-10">{t("LanguagesTitle_Label")}</h2>;
}
