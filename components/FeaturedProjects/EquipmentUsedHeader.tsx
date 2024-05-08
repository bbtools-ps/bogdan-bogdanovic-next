"use client";

import { useTranslation } from "react-i18next";

export default function EquipmentUsedHeader() {
  const { t } = useTranslation();

  return <p className="mb-4">{t("ProjectEquipmentUsed_Label")}</p>;
}
