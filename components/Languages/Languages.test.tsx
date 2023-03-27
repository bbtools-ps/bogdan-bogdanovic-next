import { render } from "@testing-library/react";
import Languages from "./Languages";

// Mock the useTranslation hook to avoid issues with i18n.
vi.mock("react-i18next", async () => {
  const mod: any = await vi.importActual("react-i18next");
  return { ...mod, useTranslation: () => ({ t: (key: string) => key }) };
});

describe("<Languages/>", () => {
  const mockDate = new Date().toISOString();
  it("should render a list of languages", () => {
    const mockLanguages = [
      {
        name: "English",
        createTime: mockDate,
        updateTime: mockDate,
        fields: {
          language: {
            stringValue: "English"
          },
          level: {
            stringValue: "Fluent"
          }
        }
      },
      {
        name: "Spanish",
        createTime: mockDate,
        updateTime: mockDate,
        fields: {
          language: {
            stringValue: "Spanish"
          },
          level: {
            stringValue: "Intermediate"
          }
        }
      }
    ];

    const { getByText } = render(<Languages data={mockLanguages} />);

    expect(getByText("English (Fluent)")).toBeInTheDocument();
    expect(getByText("Spanish (Intermediate)")).toBeInTheDocument();
  });

  it('should render a "no results" message when there are no languages', () => {
    const { getByText } = render(<Languages data={[]} />);

    expect(getByText("home:EducationNone_Label")).toBeInTheDocument();
  });
});
