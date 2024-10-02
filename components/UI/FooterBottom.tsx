"use client";

import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";

export default function FooterBottom() {
  const { t } = useTranslation();

  return (
    <div className="mb-10 mt-12">
      <p>{t("FooterDescription1_Label")}</p>
      <p>
        <Trans
          i18nKey={t("FooterDescription2_Label")}
          components={{
            link1: (
              <Link
                href="https://github.com/bbtools-ps/bogdan-bogdanovic-website"
                rel="noopener noreferrer"
                target="_blank"
                className="text-link"
              />
            ),
          }}
        />
      </p>
    </div>
  );
}
