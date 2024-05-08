"use client";

import { EMAIL } from "@/constants";
import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <section>
      <h1 className="text-center">{t("AuthorName_Label")}</h1>
      <h2 className="text-center text-4xl">{t("AuthorHeadline_Label")}</h2>
      <p className="my-10 whitespace-pre-wrap">
        <Trans
          i18nKey={t("home:AuthorAbout_Label")}
          components={{
            link1: (
              <Link
                href={`mailto:${EMAIL}`}
                className="text-link"
                rel="noopener noreferrer"
                target="_top"
              ></Link>
            ),
          }}
        />
      </p>
    </section>
  );
}
