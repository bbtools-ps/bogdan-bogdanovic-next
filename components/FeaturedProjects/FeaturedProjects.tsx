import { Trans, useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProjectsSlice } from "../../common/models/ReduxSlices";
import { fetchProjects } from "../../redux/reducers/featuredProjectsSlice";
import { AppDispatch, RootState } from "../../redux/store";
import SectionContent from "../Layout/Section/SectionContent";
import LinkText from "../UI/LinkText";
import Projects from "./Projects";

const FeaturedProjects = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: projects,
    isLoading: loading,
    error
  } = useSelector<RootState, ProjectsSlice>((state) => state.featuredProjects);
  const { locale } = useRouter();

  useEffect(() => {
    if (locale) {
      dispatch(fetchProjects(locale));
    }
  }, [dispatch, locale]);

  return (
    <section className="projects">
      <div className="content-wrap">
        <h2>{t("home:FeaturedProjectsTitle_Label")}</h2>
        <p>
          <Trans
            i18nKey={t("home:FeaturedProjectsDescription_Label")}
            components={{
              link1: (
                <LinkText href="https://github.com/bbtools-ps/">
                  Github
                </LinkText>
              ),
              link2: (
                <LinkText href={"https://www.behance.net/bogdanbogdanovic"}>
                  Behance
                </LinkText>
              )
            }}
          />
        </p>
        <SectionContent
          loading={loading}
          error={error}
          data={projects}
          errorMessage={t("home:FeaturedProjectsError_Label")}
          noResultsMessage={t("home:FeaturedProjectsNone_Label")}
        >
          <Projects projects={projects} />
        </SectionContent>
      </div>
    </section>
  );
};

export default FeaturedProjects;
