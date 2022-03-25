import ExternalLink from "../ExternalLink";
import FeaturedProjectItem from "./FeaturedProjectItem";

const FeaturedProjects = () => {
  return (
    <section className="projects">
      <div className="content-wrap">
        <h2>Featured Projects</h2>
        <p>
          Check out my <ExternalLink url="https://github.com/bbtools-ps/" text="Github" /> and{" "}
          <ExternalLink url="https://www.behance.net/bogdanbogdanovic" text="Behance" /> for more projects.
        </p>
        <FeaturedProjectItem />
      </div>
    </section>
  );
};

export default FeaturedProjects;
