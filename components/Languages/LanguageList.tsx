import { DATABASE_PATH, REVALIDATE_INTERVAL } from "@/constants";
import { sortDataCreateTime } from "@/lib/utils";
import { ILanguageData } from "@/models";

export default async function LanguageList({ locale }: { locale: string }) {
  const data = await fetch(
    `${DATABASE_PATH}/languages${locale === "en" ? "" : "-" + locale}`,
    {
      next: { revalidate: REVALIDATE_INTERVAL },
    },
  );
  const languages = (await data.json()) as ILanguageData;
  const sortedLanguages = sortDataCreateTime(languages.documents, "ASC");

  return (
    <ul className="flex list-disc flex-col gap-4 px-4">
      {sortedLanguages.map((language, index) => (
        <li key={index}>
          <strong>{language.fields.language.stringValue}</strong>
          <span className="ml-2">{`(${language.fields.level.stringValue})`}</span>
        </li>
      ))}
    </ul>
  );
}
