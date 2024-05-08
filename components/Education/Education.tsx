import { Suspense } from "react";
import EducationHeader from "./EducationHeader";
import EducationList from "./EducationList";
import EducationLoading from "./EducationLoading";

export default function Education({ locale }: { locale: string }) {
  return (
    <section>
      <EducationHeader />
      <Suspense fallback={<EducationLoading />}>
        <EducationList locale={locale} />
      </Suspense>
    </section>
  );
}
