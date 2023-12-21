import { Locales } from "@/common/constants";
import { IStringValue } from "@/common/models";
import { formatDate } from "@/common/utils";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { Suspense } from "react";
import ExternalLink from "../UI/ExternalLink/ExternalLink";
import classes from "./JobItem.module.scss";

interface IJobItemProps {
  jobTitle: string;
  companyName: string;
  description: IStringValue[];
  startDate: string;
  endDate?: string;
  companyLink?: string;
}

const JobItem: React.FC<IJobItemProps> = ({
  jobTitle,
  companyName,
  companyLink,
  description,
  startDate,
  endDate
}) => {
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
            {formatDate(startDate, Locales[locale])} -{" "}
            {endDate ? formatDate(endDate, Locales[locale]) : t("home:WorkExperiencePresent_Label")}
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
};

export default JobItem;
