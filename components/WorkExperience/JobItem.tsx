import { Link } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { Suspense } from "react";
import { Locales } from "../../common/constants/constants";
import { formatDate } from "../../common/functions/utils";
import { StringValue } from "../../common/models/FirebaseValues";
import classes from "./JobItem.module.scss";

interface JobItemProps {
  jobTitle: string;
  companyName: string;
  description: StringValue[];
  startDate: string;
  endDate?: string;
  companyLink?: string;
}

const JobItem: React.FC<JobItemProps> = ({
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
          <Link href={companyLink} target="_blank" rel="noopener noreferrer" color="secondary">
            {companyName}
          </Link>
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
