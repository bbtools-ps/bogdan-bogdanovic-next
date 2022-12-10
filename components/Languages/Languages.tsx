import { Loading } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LanguageState } from "../../common/models/ReduxSlices";
import { fetchLanguages } from "../../redux/reducers/languagesSlice";
import { AppDispatch, RootState } from "../../redux/store";

const Languages = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: languages,
    isLoading: loading,
    error,
  } = useSelector<RootState, LanguageState>((state) => state.languages);
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
        {/* State: pending */}
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loading />
          </div>
        )}
        {/* State: succeeded */}
        <ul>
          {!loading &&
            !error &&
            languages?.map((item) => (
              <li key={item.name}>
                {item.fields.language.stringValue} (
                {item.fields.level.stringValue})
              </li>
            ))}
        </ul>
        {/* State: none */}
        {!loading && !error && !languages?.length && (
          <p>{t("home:EducationNone_Label")}</p>
        )}
        {/* State: failed */}
        {error && <p>{t("home:LanguagesNone_Label")}</p>}
      </div>
    </section>
  );
};

export default Languages;
