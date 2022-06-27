import { Link } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";
import { Locales } from "../../common/constants/constants";
import { StringValue } from "../../common/models/StringValue";

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
  endDate,
}) => {
  const { locale } = useRouter();
  const { t } = useTranslation();
  // @ts-ignore
  const theLocale = locale ? Locales[locale] : "en-US";

  return (
    <section className="job-item">
      <div className="job-details">
        <h3>{jobTitle}</h3>
        <p>
          <Link
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            color="secondary"
          >
            {companyName}
          </Link>
        </p>
        <p>
          {new Date(startDate).toLocaleDateString(theLocale, {
            year: "numeric",
            month: "short",
          })}{" "}
          -{" "}
          {endDate
            ? new Date(endDate).toLocaleDateString(theLocale, {
                year: "numeric",
                month: "short",
              })
            : t("home:WorkExperiencePresent_Label")}
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
