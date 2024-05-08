import { Suspense } from "react";
import FeaturedProjectList from "./FeaturedProjectList";
import FeaturedProjectsHeader from "./FeaturedProjectsHeader";
import FeaturedProjectsLoading from "./FeaturedProjectsLoading";

export default function FeaturedProjects({ locale }: { locale: string }) {
  return (
    <section>
      <FeaturedProjectsHeader />
      <Suspense fallback={<FeaturedProjectsLoading />}>
        <FeaturedProjectList locale={locale} />
      </Suspense>
    </section>
  );
}
