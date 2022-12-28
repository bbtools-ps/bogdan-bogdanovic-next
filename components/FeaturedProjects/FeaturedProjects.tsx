import { Loading } from "@nextui-org/react";
import { Trans, useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProjectsSlice } from "../../common/models/ReduxSlices";
import { fetchProjects } from "../../redux/reducers/featuredProjectsSlice";
import { AppDispatch, RootState } from "../../redux/store";
import LinkText from "../UI/Button/LinkText";
import Projects from "./Projects";

const FeaturedProjects = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: projects,
    isLoading: loading,
    error,
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
        {!loading && !error && <Projects projects={projects} />}
        {/* State: none */}
        {!loading && !error && !projects?.length && (
          <p>{t("home:FeaturedProjectsNone_Label")}</p>
        )}
        {/* State: failed */}
        {error && <p>{t("home:FeaturedProjectsError_Label")}</p>}
      </div>
    </section>
  );
};

export default FeaturedProjects;
