import React from "react";
import Project from "../models/project";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";

interface MainContentProps {
  featuredProjects: Project[];
}

const MainContent: React.FC<MainContentProps> = ({ featuredProjects }) => {
  return (
    <main>
      <FeaturedProjects projects={featuredProjects} />
    </main>
  );
};

export default MainContent;
