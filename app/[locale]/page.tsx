import Education from "@/components/Education/Education";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Introduction from "@/components/Introduction/Introduction";
import Languages from "@/components/Languages/Languages";
import TranslationsProvider from "@/components/TranslationsProvider";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import initTranslations from "@/lib/i18n";

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
    </TranslationsProvider>
  );
}
