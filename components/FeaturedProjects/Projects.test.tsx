import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

// Mock the useTranslation hook to avoid issues with i18n.
vi.mock("next-i18next", async () => {
  const mod: any = await vi.importActual("next-i18next");
  return { ...mod, useTranslation: () => ({ t: (key: string) => key }) };
});

describe("<Projects/>", () => {
  const mockProjects = [
    {
      name: "project1",
      createTime: "2022-03-01T05:30:00.000Z",
      updateTime: "2022-03-01T05:30:00.000Z",
      fields: {
        title: { stringValue: "Project 1" },
        imageSrc: { stringValue: "/path/to/image1.png" },
        description: { stringValue: "Description of Project 1" },
        technologies: {
          arrayValue: { values: [{ stringValue: "Tech 1" }, { stringValue: "Tech 2" }] }
        },
        equipment: {
          arrayValue: { values: [{ stringValue: "Equipment 1" }, { stringValue: "Equipment 2" }] }
        },
        infoLink: { stringValue: "https://example.com/project1/info" },
        sourceLink: { stringValue: "https://example.com/project1/source" },
        liveLink: { stringValue: "https://example.com/project1/live" }
      }
    },
    {
      name: "project2",
      createTime: "2022-03-01T05:30:00.000Z",
      updateTime: "2022-03-01T05:30:00.000Z",
      fields: {
        title: { stringValue: "Project 2" },
        imageSrc: { stringValue: "/path/to/image2.png" },
        description: { stringValue: "Description of Project 2" },
        technologies: {
          arrayValue: { values: [{ stringValue: "Tech 3" }, { stringValue: "Tech 4" }] }
        },
        equipment: {
          arrayValue: { values: [{ stringValue: "Equipment 3" }, { stringValue: "Equipment 4" }] }
        },
        infoLink: { stringValue: "https://example.com/project2/info" },
        sourceLink: { stringValue: "https://example.com/project2/source" },
        liveLink: { stringValue: "https://example.com/project2/live" }
      }
    }
  ];

  it("renders project items for the current page", () => {
    render(<Projects data={mockProjects} pageSize={1} />);
    const firstProjectTitle = screen.getByText("Project 1");
    expect(firstProjectTitle).toBeInTheDocument();
  });

  it("renders a pagination component when there are multiple pages", () => {
    render(<Projects data={mockProjects} pageSize={1} />);
    const pagination = screen.getByLabelText("pagination");
    expect(pagination).toBeInTheDocument();
  });

  it("does not render a pagination component when there is only one page", () => {
    render(<Projects data={mockProjects} pageSize={10} />);
    const pagination = screen.queryByLabelText("pagination");
    expect(pagination).not.toBeInTheDocument();
  });
});
