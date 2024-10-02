"use client";

import { BEHANCE_LINK, GITHUB_LINK } from "@/constants";
import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";

export default function FeaturedProjectsHeader() {
  const { t } = useTranslation();

  return (
    <>
      <h2 id="projects" tabIndex={-1}>
        {t("FeaturedProjectsTitle_Label")}
      </h2>
      <p className="mb-10 md:mb-20">
        <Trans
          i18nKey={t("FeaturedProjectsDescription_Label")}
          components={{
            link1: (
              <Link
                href={GITHUB_LINK}
                rel="noopener noreferrer"
                target="_blank"
                className="text-link"
              />
            ),
            link2: (
              <Link
                href={BEHANCE_LINK}
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
