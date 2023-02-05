import { Pagination, Row, Spacer } from "@nextui-org/react";
import { useMemo, useState } from "react";
import { ProjectFields } from "../../common/models/Fields";
import ProjectItem from "./ProjectItem";

interface ProjectsProps {
  projects:
    | {
        createTime: string;
        updateTime: string;
        name: string;
        fields: ProjectFields;
      }[]
    | null;
  pageSize?: number;
  initialPage?: number;
}

const Projects: React.FC<ProjectsProps> = ({
  projects,
  pageSize = 5,
  initialPage = 1,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const total = useMemo(
    () =>
      projects && projects.length ? Math.ceil(projects.length / pageSize) : 0,
    [pageSize, projects]
  );
  const currentProjectsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return (
      projects &&
      projects.length &&
      projects.slice(firstPageIndex, lastPageIndex)
    );
  }, [currentPage, pageSize, projects]);

  return (
    <>
      {currentProjectsData &&
        currentProjectsData.map((item, index) => (
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
            index={index}
          />
        ))}
      {total > 1 && (
        <div>
          <Spacer />
          <Row justify="center" align="center">
            <Pagination
              total={total}
              initialPage={initialPage}
              onChange={setCurrentPage}
            />
          </Row>
        </div>
      )}
    </>
  );
};

export default Projects;
