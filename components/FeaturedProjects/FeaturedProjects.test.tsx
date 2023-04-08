import { render, screen } from "@testing-library/react";
import FeaturedProjects from "./FeaturedProjects";

// Mock the useTranslation hook to avoid issues with i18n.
vi.mock("next-i18next", async () => {
  const mod: any = await vi.importActual("next-i18next");
  return { ...mod, useTranslation: () => ({ t: (key: string) => key }) };
});

describe("<FeaturedProjects/>", () => {
  const mockDate = new Date().toISOString();
  const mockProjects = [
    {
      name: "Project 1",
      createTime: mockDate,
      updateTime: mockDate,
      fields: {
        description: { stringValue: "Project 1 description" },
        imageUrl: { stringValue: "http://example.com/image1.jpg" },
        linkUrl: { stringValue: "http://example.com/project1" },
        title: { stringValue: "Project 1" },
        imageSrc: { stringValue: "project1.jpg" }
      }
    },
    {
      name: "Project 2",
      createTime: mockDate,
      updateTime: mockDate,
      fields: {
        description: { stringValue: "Project 2 description" },
        imageUrl: { stringValue: "http://example.com/image2.jpg" },
        linkUrl: { stringValue: "http://example.com/project2" },
        title: { stringValue: "Project 2" },
        imageSrc: { stringValue: "project2.jpg" }
      }
    }
  ];

  it("renders the project section title", () => {
    render(<FeaturedProjects data={mockProjects} />);
    expect(screen.getByText("home:FeaturedProjectsTitle_Label")).toBeInTheDocument();
  });

  it("renders the correct number of projects", () => {
    render(<FeaturedProjects data={mockProjects} />);
    expect(screen.getAllByTestId("project")).toHaveLength(2);
  });

  it("renders the project titles and descriptions", () => {
    render(<FeaturedProjects data={mockProjects} />);
    expect(screen.getByText("Project 1")).toBeInTheDocument();
    expect(screen.getByText("Project 1 description")).toBeInTheDocument();
    expect(screen.getByText("Project 2")).toBeInTheDocument();
    expect(screen.getByText("Project 2 description")).toBeInTheDocument();
  });
});
