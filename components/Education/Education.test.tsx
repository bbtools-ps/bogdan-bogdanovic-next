import { render, screen } from "@testing-library/react";
import Education from "./Education";

// Mock the useTranslation hook to avoid issues with i18n.
vi.mock("react-i18next", async () => {
  const mod: any = await vi.importActual("react-i18next");
  return { ...mod, useTranslation: () => ({ t: (key: string) => key }) };
});

describe("<Education/>", () => {
  const mockDate = new Date().toISOString();
  const mockEducationData = [
    {
      name: "Education 1",
      createTime: mockDate,
      updateTime: mockDate,
      fields: {
        certificate: { stringValue: "Certificate 1" },
        institution: { stringValue: "Institution 1" },
        location: { stringValue: "Location 1" }
      }
    },
    {
      name: "Education 2",
      createTime: mockDate,
      updateTime: mockDate,
      fields: {
        certificate: { stringValue: "Certificate 2" },
        institution: { stringValue: "Institution 2" },
        location: { stringValue: "Location 2" }
      }
    }
  ];

  it("renders the education section title", () => {
    render(<Education data={mockEducationData} />);
    expect(screen.getByRole("heading", { name: "home:EducationTitle_Label" })).toBeInTheDocument();
  });

  it("renders the education items", () => {
    render(<Education data={mockEducationData} />);
    expect(screen.getByText("Certificate 1")).toBeInTheDocument();
    expect(screen.getByText("Institution 1, Location 1")).toBeInTheDocument();
    expect(screen.getByText("Certificate 2")).toBeInTheDocument();
    expect(screen.getByText("Institution 2, Location 2")).toBeInTheDocument();
  });

  it("renders the no results message if no education data is provided", () => {
    render(<Education data={[]} />);
    expect(screen.getByText("home:EducationNone_Label")).toBeInTheDocument();
  });
});
