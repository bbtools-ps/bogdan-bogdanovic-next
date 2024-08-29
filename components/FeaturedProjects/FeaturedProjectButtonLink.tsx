"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import Icons from "../UI/Icons";

const PROJECT_TYPES = {
  info: (
    <>
      <Icons icon="info" />
      <span aria-hidden>Info</span>
    </>
  ),
  live: (
    <>
      <Icons icon="eye" />
      <span aria-hidden>Live</span>
    </>
  ),
  source: (
    <>
      <Icons icon="code" />
      <span aria-hidden>Source</span>
    </>
  ),
} as const;

interface IProps {
  type: keyof typeof PROJECT_TYPES;
  href: string;
  title: string;
}

export default function FeaturedProjectButtonLink({
  type,
  href,
  title,
}: IProps) {
  const { t } = useTranslation();

  let altText;

  if (type === "info") {
    altText = t("InfoProject_Label", {
      project: title,
    });
  } else if (type == "live") {
    altText = t("LiveProject_Link", {
      project: title,
    });
  } else {
    altText = t("SourceProject_Label", {
      project: title,
    });
  }

  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="button-link"
    >
      {PROJECT_TYPES[type]}
      <span className="sr-only">{altText}</span>
    </Link>
  );
}
