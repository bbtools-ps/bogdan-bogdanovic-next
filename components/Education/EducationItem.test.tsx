import { render, screen } from "@testing-library/react";
import EducationItem from "./EducationItem";

describe("<EducationItem/>", () => {
  const mockProps = {
    location: "New York, NY",
    institution: "Harvard University",
    certificate: "Bachelor of Arts in Computer Science"
  };

  it("should render the institution and location", () => {
    render(<EducationItem {...mockProps} />);
    const institutionAndLocation = screen.getByText("Harvard University, New York, NY");
    expect(institutionAndLocation).toBeInTheDocument();
  });

  it("should render the certificate", () => {
    render(<EducationItem {...mockProps} />);
    const certificate = screen.getByText("Bachelor of Arts in Computer Science");
    expect(certificate).toBeInTheDocument();
  });
});
