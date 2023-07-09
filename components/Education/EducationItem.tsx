import React from "react";

interface IEducationItemProps {
  location: string;
  institution: string;
  certificate: string;
}

const EducationItem: React.FC<IEducationItemProps> = ({ location, institution, certificate }) => {
  return (
    <section>
      <h3>
        {institution}, {location}
      </h3>
      <p>{certificate}</p>
    </section>
  );
};

export default EducationItem;
