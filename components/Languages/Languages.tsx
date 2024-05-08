import { Suspense } from "react";
import LanguageList from "./LanguageList";
import LanguagesHeader from "./LanguagesHeader";
import LanguagesLoading from "./LanguagesLoading";

export default function Languages({ locale }: { locale: string }) {
  return (
    <section>
      <LanguagesHeader />
      <Suspense fallback={<LanguagesLoading />}>
        <LanguageList locale={locale} />
      </Suspense>
    </section>
  );
}
