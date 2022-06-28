import { Link, Loading } from "@nextui-org/react";
import { Trans, useTranslation } from "next-i18next";
import { DATABASE_PATH } from "../../common/constants/constants";
import useFetch from "../../common/hooks/use-fetch";
import { EducationData } from "../../common/models/Data";
import EducationItem from "./EducationItem";

const Education = () => {
  const { t } = useTranslation();
  const {
    data: education,
    loading,
    error,
  } = useFetch<EducationData | null>(`${DATABASE_PATH}/education`, null);

  return (
    <section className="education">
      <div className="content-wrap item-details">
        <h2>{t("home:EducationTitle_Label")}</h2>
        <p>
          <Trans
            i18nKey={t("home:EducationDescription_Label")}
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
          education?.documents?.length &&
          education.documents
            .sort(
              (a, b) =>
                new Date(a.createTime).getTime() -
                new Date(b.createTime).getTime()
            )
            .map((item) => (
              <EducationItem
                key={item.name}
                certificate={item.fields.certificate.stringValue}
                institution={item.fields.institution.stringValue}
                location={item.fields.location.stringValue}
              />
            ))}
        {/* State: none */}
        {!loading && !education?.documents?.length && (
          <p>{t("home:EducationNone_Label")}</p>
        )}
        {/* State: failed */}
        {error && <p>{t("home:EducationError_Label")}</p>}
      </div>
    </section>
  );
};

export default Education;
