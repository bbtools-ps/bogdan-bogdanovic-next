import { Suspense } from "react";
import WorkExperienceHeader from "./WorkExperienceHeader";
import WorkExperienceList from "./WorkExperienceList";
import WorkExperienceLoading from "./WorkExperienceLoading";

export default function WorkExperience({ locale }: { locale: string }) {
  return (
    <section>
      <WorkExperienceHeader />
      <Suspense fallback={<WorkExperienceLoading />}>
        <WorkExperienceList locale={locale} />
      </Suspense>
    </section>
  );
}
