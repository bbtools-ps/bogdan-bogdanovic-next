"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import Icons from "../UI/Icons";

const PROJECT_TYPES = {
  info: {
    element: (
      <>
        <Icons icon="info" />
        <span aria-hidden="true">Info</span>
      </>
    ),
    altTextLabel: "InfoProject_Label",
  },
  live: {
    element: (
      <>
        <Icons icon="eye" />
        <span aria-hidden="true">Live</span>
      </>
    ),
    altTextLabel: "LiveProject_Label",
  },
  source: {
    element: (
      <>
        <Icons icon="code" />
        <span aria-hidden="true">Source</span>
      </>
    ),
    altTextLabel: "SourceProject_Label",
  },
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

  const selectedProject = PROJECT_TYPES[type];

  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="button-link"
    >
      {selectedProject.element}
      <span className="sr-only">
        {t(selectedProject.altTextLabel, {
          project: title,
        })}
      </span>
    </Link>
  );
}
