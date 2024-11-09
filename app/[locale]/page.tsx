import Education from "@/components/Education/Education";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Introduction from "@/components/Introduction/Introduction";
import Languages from "@/components/Languages/Languages";
import TranslationsProvider from "@/components/TranslationsProvider";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import initTranslations from "@/lib/i18n";
import Image from "next/image";
import bgImage from "../../public/images/bg.webp";

const i18nNamespaces = ["home"];

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Introduction />
      <FeaturedProjects locale={locale} />
      <WorkExperience locale={locale} />
      <Education locale={locale} />
      <Languages locale={locale} />
      <div className="fixed inset-0 -z-10 h-full w-full">
        <Image
          src={bgImage}
          alt=""
          fill
          placeholder="blur"
          className="object-cover"
        />
        <div className="absolute h-full w-full bg-slate-100 opacity-80 dark:bg-slate-800" />
        <div className="absolute h-full w-full overflow-auto bg-gradient-to-t from-slate-100/50 dark:from-slate-900/50" />
      </div>
    </TranslationsProvider>
  );
}
