import { IProjectFields } from "@/models";
import { Pagination, Row, Spacer } from "@nextui-org/react";
import { useMemo, useState } from "react";
import ProjectItem from "./ProjectItem";

interface IProps {
  data:
    | {
        createTime: string;
        updateTime: string;
        name: string;
        fields: IProjectFields;
      }[]
    | null;
  pageSize?: number;
  initialPage?: number;
}

export default function Projects({ data, pageSize = 5, initialPage = 1 }: IProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const total = useMemo(
    () => (data && data.length ? Math.ceil(data.length / pageSize) : 0),
    [pageSize, data]
  );
  const currentProjectsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data && data.length && data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, data]);

  return (
    <>
      {currentProjectsData &&
        currentProjectsData.map((item) => (
          <ProjectItem
            key={item.name}
            title={item.fields.title.stringValue}
            imageSrc={item.fields.imageSrc.stringValue}
            description={item.fields.description.stringValue}
            technologies={item.fields.technologies?.arrayValue.values}
            equipment={item.fields.equipment?.arrayValue.values}
            infoLink={item.fields.infoLink?.stringValue}
            sourceLink={item.fields.sourceLink?.stringValue}
            liveLink={item.fields.liveLink?.stringValue}
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
              aria-label="pagination"
            />
          </Row>
        </div>
      )}
    </>
  );
}
