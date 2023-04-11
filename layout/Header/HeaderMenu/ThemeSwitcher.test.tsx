import { useTheme } from "@nextui-org/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useTheme as useNextTheme } from "next-themes";
import ThemeSwitcher from "./ThemeSwitcher";

// Mock the useTheme and useNextTheme hooks
vi.mock("@nextui-org/react", async () => {
  const mod: any = await vi.importActual("@nextui-org/react");
  return { ...mod, useTheme: vi.fn() };
});
vi.mock("next-themes", async () => {
  const mod: any = await vi.importActual("next-themes");
  return { ...mod, useTheme: vi.fn() };
});

const mockedUseTheme = vi.mocked(useTheme);
const mockedUseNextTheme = vi.mocked(useNextTheme);

describe("<ThemeSwitcher/>", () => {
  const setTheme = vi.fn();

  beforeEach(() => {
    // Reset the mock implementation for each test
    mockedUseTheme.mockReturnValueOnce({ type: "light", isDark: false });
    mockedUseNextTheme.mockReturnValueOnce({
      themes: ["dark", "light"],
      setTheme,
    });
  });

  it("renders the switch", () => {
    render(<ThemeSwitcher />);
    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveAttribute("data-state", "unchecked");
  });

  it("sets the theme to dark when the switch is toggled", async () => {
    render(<ThemeSwitcher />);
    const switchElement = screen.getByRole("switch");
    await userEvent.click(switchElement);
    expect(setTheme).toHaveBeenCalledWith("dark");
  });

  it("sets the theme to light when the switch is toggled", async () => {
    render(<ThemeSwitcher />);
    const switchElement = screen.getByRole("switch");
    await userEvent.click(switchElement);
    await userEvent.click(switchElement);
    expect(setTheme).toHaveBeenCalledWith("light");
  });
});
