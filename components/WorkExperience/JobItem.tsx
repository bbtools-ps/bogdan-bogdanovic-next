import { LOCALES } from "@/constants";
import { IStringValue } from "@/models";
import { formatDate } from "@/utils";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Suspense } from "react";
import ExternalLink from "../UI/ExternalLink/ExternalLink";
import classes from "./JobItem.module.scss";

interface IProps {
  jobTitle: string;
  companyName: string;
  description: IStringValue[];
  startDate: string;
  endDate?: string;
  companyLink?: string;
}

export default function JobItem({
  jobTitle,
  companyName,
  companyLink,
  description,
  startDate,
  endDate
}: IProps) {
  const { locale } = useRouter();
  const { t } = useTranslation();

  return (
    <section className="job-item">
      <div className="job-details">
        <h3>{jobTitle}</h3>
        <p>
          <ExternalLink href={companyLink} color="secondary">
            {companyName}
          </ExternalLink>
        </p>
        <p className={classes.date}>
          <Suspense fallback={null}>
            {formatDate(startDate, LOCALES[locale])} -{" "}
            {endDate ? formatDate(endDate, LOCALES[locale]) : t("home:WorkExperiencePresent_Label")}
          </Suspense>
        </p>
      </div>
      <div className="job-summary">
        <ul>
          {description.map((item) => (
            <li key={item.stringValue}>{item.stringValue}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
