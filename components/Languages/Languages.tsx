import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LanguageSlice } from "../../common/models/ReduxSlices";
import { fetchLanguages } from "../../redux/reducers/languagesSlice";
import { AppDispatch, RootState } from "../../redux/store";
import SectionContent from "../Layout/Section/SectionContent";

const Languages = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: languages,
    isLoading: loading,
    error
  } = useSelector<RootState, LanguageSlice>((state) => state.languages);
  const { locale } = useRouter();

  useEffect(() => {
    if (locale) {
      dispatch(fetchLanguages(locale));
    }
  }, [dispatch, locale]);

  return (
    <section className="languages">
      <div className="content-wrap item-details">
        <h2>{t("home:LanguagesTitle_Label")}</h2>
        <SectionContent
          loading={loading}
          error={error}
          data={languages}
          errorMessage={t("home:LanguagesNone_Label")}
          noResultsMessage={t("home:EducationNone_Label")}
        >
          <ul>
            {languages?.map((item) => (
              <li key={item.name}>
                {item.fields.language.stringValue} (
                {item.fields.level.stringValue})
              </li>
            ))}
          </ul>
        </SectionContent>
      </div>
    </section>
  );
};

export default Languages;
