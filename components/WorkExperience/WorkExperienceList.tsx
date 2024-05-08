import { DATABASE_PATH, REVALIDATE_INTERVAL } from "@/constants";
import { sortDataCreateTime } from "@/lib/utils";
import { IWorkExperienceData } from "@/models";
import Link from "next/link";

export default async function WorkExperienceList({
  locale,
}: {
  locale: string;
}) {
  const data = await fetch(
    `${DATABASE_PATH}/work-experience${locale === "en" ? "" : "-" + locale}`,
    {
      next: { revalidate: REVALIDATE_INTERVAL },
    },
  );
  const workExperience = (await data.json()) as IWorkExperienceData;
  const sortedWorkExperience = sortDataCreateTime(workExperience.documents);

  return (
    <>
      {sortedWorkExperience.map((experience, index, self) => (
        <div
          key={experience.createTime}
          className={`grid grid-cols-1 border-slate-400 pt-10 lg:grid-cols-2 ${
            index < self.length - 1 && "border-b border-dashed pb-10"
          }`}
        >
          <div>
            <h3>{experience.fields.jobTitle.stringValue}</h3>
            <Link
              href={experience.fields.companyLink?.stringValue || "#"}
              className="mb-4 inline-block text-xl font-bold text-blue-700 duration-100 hover:text-blue-400 dark:text-blue-200 dark:hover:text-blue-400 lg:mb-0"
            >
              {experience.fields.companyName.stringValue}
            </Link>
          </div>
          <div>
            <ul className="list-disc px-4">
              {experience.fields.description.arrayValue.values.map(
                (value, index) => (
                  <li key={index} className="py-2">
                    {value.stringValue}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
