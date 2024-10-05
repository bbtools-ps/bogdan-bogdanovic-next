"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface IProps {
  title: string;
  src: string;
  href: string;
}

export default function FeaturedProjectImage({ title, src, href }: IProps) {
  const { t } = useTranslation();

  return (
    <Link
      href={href}
      className="group mx-auto max-h-[18.75rem] max-w-[25rem] overflow-hidden rounded border-2 border-slate-400"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={`https://firebasestorage.googleapis.com/v0/b/bogdan-bogdanovic.appspot.com/o/${src}`}
        width={400}
        height={400}
        alt={t("InfoProject_Label", {
          project: title,
        })}
        className="duration-200 group-hover:scale-110"
      />
    </Link>
  );
}
