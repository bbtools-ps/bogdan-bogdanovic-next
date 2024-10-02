"use client";

import { LINKEDIN_LINK } from "@/constants";
import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";

export default function WorkExperienceHeader() {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("WorkExperienceTitle_Label")}</h2>
      <p className="mb-4 md:mb-10">
        <Trans
          i18nKey={t("WorkExperienceDescription_Label")}
          components={{
            link1: (
              <Link
                href={LINKEDIN_LINK}
                rel="noopener noreferrer"
                target="_blank"
                className="text-link"
              />
            ),
          }}
        />
      </p>
    </>
  );
}
