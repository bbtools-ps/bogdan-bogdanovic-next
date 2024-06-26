import { IProjectData } from "@/models";
import Image from "next/image";
import Link from "next/link";
import Icons from "../UI/Icons";
import EquipmentUsedHeader from "./EquipmentUsedHeader";
import TechnologiesUsedHeader from "./TechnologiesUsedHeader";

interface IProps {
  project: IProjectData["documents"][number];
}

export default function FeaturedProjectItem({ project }: IProps) {
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
      <Link
        href={
          project.fields.infoLink?.stringValue ||
          project.fields.liveLink?.stringValue ||
          "#"
        }
        rel="noopener noreferrer"
        target="_blank"
        className="group mx-auto max-h-[300px] max-w-[400px] overflow-hidden rounded border-2 border-slate-400"
      >
        <Image
          src={`https://firebasestorage.googleapis.com/v0/b/bogdan-bogdanovic.appspot.com/o/${project.fields.imageSrc.stringValue}`}
          width={400}
          height={400}
          alt={project.fields.title.stringValue}
          className="duration-200 group-hover:scale-110"
        />
      </Link>
      <div>
        <p className="mb-4">{project.fields.description.stringValue}</p>
        {(project.fields.infoLink ||
          project.fields.liveLink ||
          project.fields.sourceLink) && (
          <div className="mb-10 flex justify-center gap-4 lg:justify-start">
            {project.fields.infoLink && (
              <Link
                href={project.fields.infoLink.stringValue}
                rel="noopener noreferrer"
                target="_blank"
                className="button-link"
              >
                <Icons icon="info" />
                <span>Info</span>
              </Link>
            )}
            {project.fields.liveLink && (
              <Link
                href={project.fields.liveLink.stringValue}
                rel="noopener noreferrer"
                target="_blank"
                className="button-link"
              >
                <Icons icon="eye" />
                <span>Live</span>
              </Link>
            )}
            {project.fields.sourceLink && (
              <Link
                href={project.fields.sourceLink.stringValue}
                rel="noopener noreferrer"
                target="_blank"
                className="button-link"
              >
                <Icons icon="code" />
                <span>Source</span>
              </Link>
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
