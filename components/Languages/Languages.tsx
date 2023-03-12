import { useTranslation } from "next-i18next";
import { LanguageData } from "../../common/models/Data";
import SectionContent from "../Layout/Section/SectionContent";

interface LanguagesProps {
  data: LanguageData["documents"];
}

const Languages: React.FC<LanguagesProps> = ({ data: languages }) => {
  const { t } = useTranslation();

  return (
    <section className="languages">
      <div className="content-wrap item-details">
        <h2>{t("home:LanguagesTitle_Label")}</h2>
        <SectionContent data={languages} noResultsMessage={t("home:EducationNone_Label")}>
          <ul>
            {languages?.map((item) => (
              <li key={item.name}>
                {item.fields.language.stringValue} ({item.fields.level.stringValue})
              </li>
            ))}
          </ul>
        </SectionContent>
      </div>
    </section>
  );
};

export default Languages;
