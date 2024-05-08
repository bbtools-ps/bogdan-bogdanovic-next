"use client";

import { LINKEDIN_LINK } from "@/constants";
import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";

export default function EducationHeader() {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("EducationTitle_Label")}</h2>
      <p className="mb-4 md:mb-10">
        <Trans
          i18nKey={t("EducationDescription_Label")}
          components={{
            link1: (
              <Link
                href={LINKEDIN_LINK}
                rel="noopener noreferrer"
                target="_blank"
                className="text-link"
              ></Link>
            ),
          }}
        />
      </p>
    </>
  );
}
