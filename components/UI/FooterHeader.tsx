"use client";

import {
  BEHANCE_LINK,
  EMAIL,
  GITHUB_LINK,
  LINKEDIN_LINK,
  YOUTUBE_LINK,
} from "@/constants";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Icons from "./Icons";

export default function FooterHeader() {
  const { t } = useTranslation();

  return (
    <section className="mb-0">
      <h2 className="text-4xl">{t("FooterTitle_Label")}</h2>
      <div className="flex justify-center">
        <Link
          href={`mailto:${EMAIL}`}
          rel="noopener noreferrer"
          target="_top"
          className="text-link flex gap-2"
        >
          <Icons icon="mail" />
          <span>{EMAIL}</span>
        </Link>
      </div>
      <div className="my-7 flex flex-wrap justify-center gap-4">
        <Link
          href={GITHUB_LINK}
          className="text-link flex justify-center gap-2"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icons icon="github" />
          <span>Github</span>
        </Link>
        <Link
          href={BEHANCE_LINK}
          className="text-link flex justify-center gap-2"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icons icon="behance" />
          <span>Behance</span>
        </Link>
        <Link
          href={LINKEDIN_LINK}
          className="text-link flex justify-center gap-2"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icons icon="linkedin" />
          <span>Linkedin</span>
        </Link>
        <Link
          href={YOUTUBE_LINK}
          className="text-link flex justify-center gap-2"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icons icon="youtube" />
          <span>Youtube</span>
        </Link>
      </div>
    </section>
  );
}
