import { Trans, useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WorkExperienceSlice } from "../../common/models/ReduxSlices";
import { fetchWorkExperience } from "../../redux/reducers/workExperienceSlice";
import { AppDispatch, RootState } from "../../redux/store";
import SectionContent from "../Layout/Section/SectionContent";
import LinkText from "../UI/LinkText";
import JobItem from "./JobItem";

const WorkExperience = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: jobs,
    isLoading: loading,
    error
  } = useSelector<RootState, WorkExperienceSlice>(
    (state) => state.workExperience
  );
  const { locale } = useRouter();

  useEffect(() => {
    if (locale) {
      dispatch(fetchWorkExperience(locale));
    }
  }, [dispatch, locale]);

  return (
    <section className="work-experience">
      <div className="content-wrap item-details">
        <h2>{t("home:WorkExperienceTitle_Label")}</h2>
        <p>
          <Trans
            i18nKey={t("home:WorkExperienceDescription_Label")}
            components={{
              link1: (
                <LinkText href="https://www.linkedin.com/in/bogdanbogdanovic">
                  Linkedin
                </LinkText>
              )
            }}
          />
        </p>
        <SectionContent
          loading={loading}
          error={error}
          data={jobs}
          errorMessage={t("home:WorkExperienceError_Label")}
          noResultsMessage={t("home:WorkExperienceNone_Label")}
        >
          {jobs?.map((item) => (
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
        </SectionContent>
      </div>
    </section>
  );
};

export default WorkExperience;
