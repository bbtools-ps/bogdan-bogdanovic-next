import { render, screen } from "@testing-library/react";
import ProjectItem from "./ProjectItem";

// Mock the useTranslation hook to avoid issues with i18n.
vi.mock("next-i18next", async () => {
  const mod: any = await vi.importActual("next-i18next");
  return { ...mod, useTranslation: () => ({ t: (key: string) => key }) };
});

describe("<ProjectItem/>", () => {
  const mockProps = {
    title: "Test Project",
    description: "This is a test project",
    imageSrc: "test-image.jpg",
    equipment: [{ stringValue: "Equipment 1" }, { stringValue: "Equipment 2" }],
    infoLink: "https://example.com/test-project",
    liveLink: "https://example.com/test-project-live",
    sourceLink: "https://example.com/test-project-source",
    technologies: [{ stringValue: "Technology 1" }, { stringValue: "Technology 2" }]
  };

  it("renders the project title", () => {
    render(<ProjectItem {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it("renders the project description", () => {
    render(<ProjectItem {...mockProps} />);
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it("renders the project image", () => {
    render(<ProjectItem {...mockProps} />);
    const image = screen.getByAltText(mockProps.title);
    expect(image).toBeInTheDocument();
  });

  it("renders the project equipment and technologies", () => {
    render(<ProjectItem {...mockProps} />);
    const equipment = screen.getAllByText(/equipment/i);
    expect(equipment).toHaveLength(2);
    const technologies = screen.getAllByText(/technology/i);
    expect(technologies).toHaveLength(2);
  });
});
