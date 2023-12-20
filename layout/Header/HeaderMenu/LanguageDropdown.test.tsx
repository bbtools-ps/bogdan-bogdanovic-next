import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import LanguageDropdown from "./LanguageDropdown";

describe("<LanguageDropdown/>", () => {
  // mock next/router module
  vi.mock("next/router", async () => {
    const mod: any = await vi.importActual("next/router");
    return { ...mod, useRouter: vi.fn() };
  });

  const mockedUseRouter = vi.mocked(useRouter);

  beforeEach(() => {
    const mockRouter = {
      route: "/",
      asPath: "/",
      basePath: "",
      isLocaleDomain: false,
      pathname: "/",
      query: {},
      push: vi.fn(),
      replace: vi.fn(),
      reload: vi.fn(),
      back: vi.fn(),
      forward: vi.fn(),
      prefetch: vi.fn(),
      beforePopState: vi.fn(),
      isFallback: false,
      isReady: true,
      isPreview: false,
      events: {
        on: vi.fn(),
        off: vi.fn(),
        emit: vi.fn()
      }
    };
    mockedUseRouter.mockReturnValue(mockRouter);
  });

  it("renders dropdown button with selected language", () => {
    render(<LanguageDropdown />);

    const dropdownButton = screen.getByRole("button");
    expect(dropdownButton).toBeInTheDocument();
  });
});
