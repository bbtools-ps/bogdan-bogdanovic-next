import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";

const MainContent = ({ featuredProjects }) => {
  return (
    <main>
      <FeaturedProjects projects={featuredProjects} />
    </main>
  );
};

export default MainContent;
