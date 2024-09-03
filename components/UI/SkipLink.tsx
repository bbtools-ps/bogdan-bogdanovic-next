"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function SkipLink() {
  const { t } = useTranslation("home");

  return (
    <Link className="skip-link" href="#projects">
      {t("SeeProjects_Label")}
    </Link>
  );
}
