import SectionContent from "@/layout/Section/SectionContent";
import { IEducationData } from "@/models";
import { Trans, useTranslation } from "next-i18next";
import ExternalLink from "../UI/ExternalLink/ExternalLink";
import EducationItem from "./EducationItem";

interface IEducationProps {
  data: IEducationData["documents"];
}

const Education: React.FC<IEducationProps> = ({ data: education }) => {
  const { t } = useTranslation();

  return (
    <section className="education">
      <div className="content-wrap item-details">
        <h2>{t("home:EducationTitle_Label")}</h2>
        <p>
          <Trans
            i18nKey={t("home:EducationDescription_Label")}
            components={{
              link1: (
                <ExternalLink href="https://www.linkedin.com/in/bogdanbogdanovic">
                  Linkedin
                </ExternalLink>
              )
            }}
          />
        </p>
        <SectionContent data={education} noResultsMessage={t("home:EducationNone_Label")}>
          {education?.map((item) => (
            <EducationItem
              key={item.name}
              certificate={item.fields.certificate.stringValue}
              institution={item.fields.institution.stringValue}
              location={item.fields.location.stringValue}
            />
          ))}
        </SectionContent>
      </div>
    </section>
  );
};

export default Education;
