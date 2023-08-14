import { Locales } from "@/common/constants";
import { formatDate } from "@/common/utils";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { Suspense } from "react";
import JobItem from "./JobItem";

vi.mock("next/router", async () => {
  const mod: any = await vi.importActual("next/router");
  return { ...mod, useRouter: vi.fn() };
});
// Mock the useTranslation hook to avoid issues with i18n.
vi.mock("next-i18next", async () => {
  const mod: any = await vi.importActual("next-i18next");
  return { ...mod, useTranslation: () => ({ t: (key: string) => key }) };
});

const mockedUseRouter = vi.mocked(useRouter);

describe("<JobItem/>", () => {
  const testJobTitle = "Software Developer";
  const testCompanyName = "Acme Inc";
  const testCompanyLink = "https://www.acme.com";
  const testDescription = [{ stringValue: "Developed software" }];
  const testStartDate = "2022-03-01T05:30:00.000Z";
  const testEndDate = "2022-03-01T05:30:00.000Z";

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

  it("renders the job title", () => {
    render(
      <JobItem
        jobTitle={testJobTitle}
        companyName={testCompanyName}
        companyLink={testCompanyLink}
        description={testDescription}
        startDate={testStartDate}
        endDate={testEndDate}
      />
    );
    const jobTitle = screen.getByText(testJobTitle);
    expect(jobTitle).toBeInTheDocument();
  });

  it("renders the company name with a link to the company website", () => {
    render(
      <JobItem
        jobTitle={testJobTitle}
        companyName={testCompanyName}
        companyLink={testCompanyLink}
        description={testDescription}
        startDate={testStartDate}
        endDate={testEndDate}
      />
    );
    const linkElement = screen.getByText(testCompanyName) as HTMLAnchorElement;
    expect(linkElement.href).toBe(testCompanyLink + "/");
    expect(linkElement.target).toBe("_blank");
    expect(linkElement.rel).toBe("noopener noreferrer");
  });

  it("renders the job description", () => {
    render(
      <JobItem
        jobTitle={testJobTitle}
        companyName={testCompanyName}
        companyLink={testCompanyLink}
        description={testDescription}
        startDate={testStartDate}
        endDate={testEndDate}
      />
    );
    const jobDescription = screen.getByText(testDescription[0].stringValue);
    expect(jobDescription).toBeInTheDocument();
  });

  it("renders the job start and end dates formatted", () => {
    render(
      <Suspense fallback={null}>
        <JobItem
          jobTitle={testJobTitle}
          companyName={testCompanyName}
          companyLink={testCompanyLink}
          description={testDescription}
          startDate={testStartDate}
          endDate={testEndDate}
        />
      </Suspense>
    );
    const formattedStartDate = formatDate(testStartDate, Locales.en);
    const formattedEndDate = formatDate(testEndDate, Locales.en);
    const formattedDates = screen.getByText(`${formattedStartDate} - ${formattedEndDate}`);
    expect(formattedDates).toBeInTheDocument();
  });

  it("renders 'Present' instead of end date when end date is not provided", () => {
    render(
      <Suspense fallback={null}>
        <JobItem
          jobTitle={testJobTitle}
          companyName={testCompanyName}
          companyLink={testCompanyLink}
          description={testDescription}
          startDate={testStartDate}
        />
      </Suspense>
    );
    const presentDate = screen.getByText(/present/i);
    expect(presentDate).toBeInTheDocument();
  });
});
