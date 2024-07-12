import { DATABASE_PATH, REVALIDATE_INTERVAL } from "@/constants";
import { sortDataCreateTime } from "@/lib/utils";
import type { IEducationData } from "@/models";

export default async function EducationList({ locale }: { locale: string }) {
  const data = await fetch(
    `${DATABASE_PATH}/education${locale === "en" ? "" : "-" + locale}`,
    {
      next: { revalidate: REVALIDATE_INTERVAL },
    }
  );
  const education = (await data.json()) as IEducationData;
  const sortedEducation = sortDataCreateTime(education.documents);

  return (
    <div className="flex flex-col gap-10">
      {sortedEducation.map((education, index) => (
        <div key={index}>
          <h3>{education.fields.institution.stringValue}</h3>
          <p className="text-lg">
            <strong>{education.fields.certificate.stringValue}</strong>
          </p>
          <p>{education.fields.location.stringValue}</p>
        </div>
      ))}
    </div>
  );
}
