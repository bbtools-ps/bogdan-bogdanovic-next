import { Link } from "@nextui-org/react";

const WorkExperience = () => {
  return (
    <section className="work-experience">
      <div className="content-wrap item-details">
        <h2>Work Experience</h2>
        <p>
          Check out my
          <Link
            href="https://www.linkedin.com/in/bogdanbogdanovic"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
            block
          >
            Linkedin
          </Link>
          to see complete work history.
        </p>
      </div>
    </section>
  );
};

export default WorkExperience;
