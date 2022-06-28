import { Link, Loading } from "@nextui-org/react";
import { Trans, useTranslation } from "next-i18next";
import { DATABASE_PATH } from "../../common/constants/constants";
import useFetch from "../../common/hooks/use-fetch";
import { WorkExperienceData } from "../../common/models/Dataa";
import JobItem from "./JobItem";

const WorkExperience = () => {
  const { t } = useTranslation();
  const {
    data: jobs,
    loading,
    error,
  } = useFetch<WorkExperienceData | null>(
    `${DATABASE_PATH}/work-experience`,
    null
  );

  return (
    <section className="work-experience">
      <div className="content-wrap item-details">
        <h2>{t("home:WorkExperienceTitle_Label")}</h2>
        <p>
          <Trans
            i18nKey={t("home:WorkExperienceDescription_Label")}
            components={{
              link1: (
                <Link
                  href="https://www.linkedin.com/in/bogdanbogdanovic"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Linkedin"
                  block
                />
              ),
            }}
          />
        </p>
        {/* State: pending */}
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loading />
          </div>
        )}
        {/* State: succeeded */}
        {!loading &&
          jobs?.documents?.length &&
          jobs.documents
            .sort(
              (a, b) =>
                new Date(b.createTime).getTime() -
                new Date(a.createTime).getTime()
            )
            .map((item) => (
              <JobItem
                key={item.name}
                companyName={item.fields.companyName.stringValue}
                companyLink={item.fields.companyLink?.stringValue}
                description={item.fields.description.arrayValue.values}
                jobTitle={item.fields.jobTitle.stringValue}
                startDate={item.fields.startDate.timestampValue}
                endDate={item.fields.endDate?.timestampValue}
              />
            ))}
        {/* State: none */}
        {!loading && !jobs?.documents?.length && (
          <p>{t("home:WorkExperienceNone_Label")}</p>
        )}
        {/* State: failed */}
        {error && <p>{t("home:WorkExperienceError_Label")}</p>}
      </div>
    </section>
  );
};

export default WorkExperience;
