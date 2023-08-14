import { render, screen } from "@testing-library/react";
import Languages from "./Languages";

// Mock the useTranslation hook to avoid issues with i18n.
vi.mock("next-i18next", async () => {
  const mod: any = await vi.importActual("next-i18next");
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
    render(<Languages data={mockLanguages} />);

    const languageEnglish = screen.getByText("English (Fluent)");
    const languageSpanish = screen.getByText("Spanish (Intermediate)");

    expect(languageEnglish).toBeInTheDocument();
    expect(languageSpanish).toBeInTheDocument();
  });

  it('should render a "no results" message when there are no languages', () => {
    render(<Languages data={[]} />);
    const languageLabel = screen.getByText("home:EducationNone_Label");
    expect(languageLabel).toBeInTheDocument();
  });
});
