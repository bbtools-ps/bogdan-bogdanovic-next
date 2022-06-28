import { Loading } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { DATABASE_PATH } from "../../common/constants/constants";
import useFetch from "../../common/hooks/use-fetch";
import { LanguageData } from "../../common/models/Data";

const Languages = () => {
  const { t } = useTranslation();
  const {
    data: languages,
    loading,
    error,
  } = useFetch<LanguageData | null>(`${DATABASE_PATH}/languages`, null);
  return (
    <section className="languages">
      <div className="content-wrap item-details">
        <h2>{t("home:LanguagesTitle_Label")}</h2>
        {/* State: pending */}
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loading />
          </div>
        )}
        {/* State: succeeded */}
        <ul>
          {!loading &&
            languages?.documents?.length &&
            languages.documents
              .sort(
                (a, b) =>
                  new Date(a.createTime).getTime() -
                  new Date(b.createTime).getTime()
              )
              .map((item) => (
                <li key={item.name}>
                  {item.fields.language.stringValue} (
                  {item.fields.level.stringValue})
                </li>
              ))}
        </ul>
        {/* State: none */}
        {!loading && !languages?.documents?.length && (
          <p>{t("home:EducationNone_Label")}</p>
        )}
        {/* State: failed */}
        {error && <p>{t("home:LanguagesNone_Label")}</p>}
      </div>
    </section>
  );
};

export default Languages;
