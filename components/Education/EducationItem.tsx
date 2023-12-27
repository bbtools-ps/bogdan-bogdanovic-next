interface IEducationItemProps {
  location: string;
  institution: string;
  certificate: string;
}

export default function EducationItem({ location, institution, certificate }: IEducationItemProps) {
  return (
    <section>
      <h3>
        {institution}, {location}
      </h3>
      <p>{certificate}</p>
    </section>
  );
}
