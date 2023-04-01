import { formatDate } from "@/common/functions/utils";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import WorkExperience from "./WorkExperience";

vi.mock("next/router", async () => {
  const mod: any = await vi.importActual("next/router");
  return { ...mod, useRouter: vi.fn() };
});
// Mock the useTranslation hook to avoid issues with i18n.
vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

const mockedUseRouter = vi.mocked(useRouter);

describe("<WorkExperience/>", () => {
  const testDate = new Date().toISOString();

  beforeEach(() => {
    mockedUseRouter.mockReturnValue({
      locale: "en",
      route: "/",
      pathname: "/",
      asPath: "",
      query: {},
      basePath: "/",
      isLocaleDomain: false,
      back: vi.fn(),
      push: vi.fn(),
      replace: vi.fn(),
      reload: vi.fn(),
      forward: vi.fn(),
      prefetch: vi.fn(),
      isFallback: true,
      isReady: true,
      isPreview: true,
      beforePopState: vi.fn(),
      events: {
        emit: vi.fn(),
        off: vi.fn(),
        on: vi.fn()
      }
    });
  });
  it("renders section title", () => {
    const data = [
      {
        name: "Job 1",
        createTime: testDate,
        updateTime: testDate,
        fields: {
          companyName: { stringValue: "Company 1" },
          jobTitle: { stringValue: "Job Title 1" },
          description: { arrayValue: { values: [{ stringValue: "Description 1" }] } },
          startDate: { timestampValue: testDate },
          endDate: { timestampValue: testDate }
        }
      }
    ];
    render(<WorkExperience data={data} />);
    expect(screen.getByText("home:WorkExperienceTitle_Label")).toBeInTheDocument();
  });

  it("renders job items", () => {
    const data = [
      {
        name: "Job 1",
        createTime: testDate,
        updateTime: testDate,
        fields: {
          companyName: { stringValue: "Company 1" },
          jobTitle: { stringValue: "Job Title 1" },
          description: { arrayValue: { values: [{ stringValue: "Description 1" }] } },
          startDate: { timestampValue: testDate },
          endDate: { timestampValue: testDate }
        }
      },
      {
        name: "Job 2",
        createTime: testDate,
        updateTime: testDate,
        fields: {
          companyName: { stringValue: "Company 2" },
          jobTitle: { stringValue: "Job Title 2" },
          description: {
            arrayValue: {
              values: [{ stringValue: "Description 2.1" }, { stringValue: "Description 2.2" }]
            }
          },
          startDate: { timestampValue: testDate }
        }
      }
    ];
    render(<WorkExperience data={data} />);
    expect(screen.getByText("Job Title 1")).toBeInTheDocument();
    expect(screen.getByText("Company 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(
      screen.getByText(`${formatDate(testDate)} - ${formatDate(testDate)}`)
    ).toBeInTheDocument();
    expect(screen.getByText("Job Title 2")).toBeInTheDocument();
    expect(screen.getByText("Company 2")).toBeInTheDocument();
    expect(screen.getByText("Description 2.1")).toBeInTheDocument();
    expect(screen.getByText("Description 2.2")).toBeInTheDocument();
    expect(
      screen.getByText(`${formatDate(testDate)} - home:WorkExperiencePresent_Label`)
    ).toBeInTheDocument();
  });

  it("renders no results message", () => {
    render(<WorkExperience data={[]} />);
    expect(screen.getByText("home:WorkExperienceNone_Label")).toBeInTheDocument();
  });
});
