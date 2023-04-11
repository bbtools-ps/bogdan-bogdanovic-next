import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import LanguageDropdown from "./LanguageDropdown";

describe("<LanguageDropdown/>", () => {
  const mockStore = configureStore([]);
  let store: MockStoreEnhanced<unknown, {}>;

  // mock next/router module
  vi.mock("next/router", async () => {
    const mod: any = await vi.importActual("next/router");
    return { ...mod, useRouter: vi.fn() };
  });

  const mockedUseRouter = vi.mocked(useRouter);

  beforeEach(() => {
    store = mockStore({
      settings: {
        selectedLanguage: ["en"]
      }
    });
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
    render(
      <Provider store={store}>
        <LanguageDropdown />
      </Provider>
    );

    const dropdownButton = screen.getByRole("button", { name: "en" });
    expect(dropdownButton).toBeInTheDocument();
  });
});
