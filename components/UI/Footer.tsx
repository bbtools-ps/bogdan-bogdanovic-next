import initTranslations from "@/lib/i18n";
import Image from "next/image";
import bgImage from "../../public/images/bg.webp";
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
        <div className="fixed inset-0 -z-10 h-full w-full">
          <Image
            src={bgImage}
            alt="Background image"
            fill
            placeholder="blur"
            className="object-cover"
          />
          <div className="h-full w-full bg-slate-100 opacity-80 dark:bg-slate-800"></div>
        </div>
      </footer>
    </TranslationsProvider>
  );
}
