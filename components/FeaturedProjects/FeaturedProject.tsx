import type { IProjectData } from "@/models";
import Link from "next/link";
import EquipmentUsedHeader from "./EquipmentUsedHeader";
import FeaturedProjectButtonLink from "./FeaturedProjectButtonLink";
import FeaturedProjectImage from "./FeaturedProjectImage";
import TechnologiesUsedHeader from "./TechnologiesUsedHeader";

interface IProps {
  project: IProjectData["documents"][number];
}

export default function FeaturedProject({ project }: IProps) {
  return (
    <div className="mb-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="col-span-full mx-auto mb-5 flex">
        <Link
          href={
            project.fields.infoLink?.stringValue ||
            project.fields.liveLink?.stringValue ||
            "#"
          }
          rel="noopener noreferrer"
          target="_blank"
          className="self-start duration-100 hover:text-blue-700 dark:hover:text-blue-300"
        >
          <h3>{project.fields.title.stringValue}</h3>
        </Link>
      </div>
      <FeaturedProjectImage
        title={project.fields.title.stringValue}
        src={project.fields.imageSrc.stringValue}
        href={
          project.fields.infoLink?.stringValue ||
          project.fields.liveLink?.stringValue ||
          "#"
        }
      />
      <div>
        <p className="mb-4">{project.fields.description.stringValue}</p>
        {(project.fields.infoLink ||
          project.fields.liveLink ||
          project.fields.sourceLink) && (
          <div className="mb-10 flex justify-center gap-4 lg:justify-start">
            {project.fields.infoLink && (
              <FeaturedProjectButtonLink
                type="info"
                href={project.fields.infoLink.stringValue}
                title={project.fields.title.stringValue}
              />
            )}
            {project.fields.liveLink && (
              <FeaturedProjectButtonLink
                type="live"
                href={project.fields.liveLink.stringValue}
                title={project.fields.title.stringValue}
              />
            )}
            {project.fields.sourceLink && (
              <FeaturedProjectButtonLink
                type="source"
                href={project.fields.sourceLink.stringValue}
                title={project.fields.title.stringValue}
              />
            )}
          </div>
        )}
        {project.fields.technologies?.arrayValue.values &&
          project.fields.technologies?.arrayValue.values.length > 0 && (
            <>
              <TechnologiesUsedHeader />
              <div className="flex flex-wrap gap-2">
                {project.fields.technologies.arrayValue.values.map(
                  (technology, index) => (
                    <p
                      key={index}
                      className="rounded border border-solid border-slate-400 px-2 py-1"
                    >
                      {technology.stringValue}
                    </p>
                  )
                )}
              </div>
            </>
          )}
        {project.fields.equipment?.arrayValue.values &&
          project.fields.equipment?.arrayValue.values.length > 0 && (
            <>
              <EquipmentUsedHeader />
              <div className="flex flex-wrap gap-2">
                {project.fields.equipment.arrayValue.values.map(
                  (equipment, index) => (
                    <p
                      key={index}
                      className="rounded border border-solid border-slate-400 px-2 py-1"
                    >
                      {equipment.stringValue}
                    </p>
                  )
                )}
              </div>
            </>
          )}
      </div>
    </div>
  );
}
