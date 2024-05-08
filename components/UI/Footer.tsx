import initTranslations from "@/lib/i18n";
import TranslationsProvider from "../TranslationsProvider";
import FooterBottom from "./FooterBottom";
import FooterHeader from "./FooterHeader";

const i18nNamespaces = ["common"];

export default async function Footer({ locale }: { locale: string }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <footer className="text-center">
        <FooterHeader />
        <FooterBottom />
      </footer>
    </TranslationsProvider>
  );
}
