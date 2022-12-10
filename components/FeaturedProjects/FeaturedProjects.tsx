import { Link, Loading } from "@nextui-org/react";
import { Trans, useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProjectsState } from "../../common/models/ReduxSlices";
import { fetchProjects } from "../../redux/reducers/featuredProjectsSlice";
import { AppDispatch, RootState } from "../../redux/store";
import ProjectItem from "./ProjectItem";

const FeaturedProjects = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: projects,
    isLoading: loading,
    error,
  } = useSelector<RootState, ProjectsState>((state) => state.featuredProjects);
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
                <Link
                  href={"https://github.com/bbtools-ps/"}
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                  block
                />
              ),
              link2: (
                <Link
                  href={"https://www.behance.net/bogdanbogdanovic"}
                  title="Behance"
                  target="_blank"
                  rel="noopener noreferrer"
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
          !error &&
          projects?.map((item) => (
            <ProjectItem
              key={item.name}
              title={item.fields.title.stringValue}
              imageSrc={item.fields.imageName.stringValue}
              description={item.fields.description.stringValue}
              technologies={item.fields.technologies?.arrayValue.values}
              equipment={item.fields.equipment?.arrayValue.values}
              infoLink={item.fields.infoLink?.stringValue}
              sourceLink={item.fields.sourceLink?.stringValue}
              liveLink={item.fields.liveLink?.stringValue}
            />
          ))}
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
