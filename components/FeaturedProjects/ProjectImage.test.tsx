import { render, screen } from "@testing-library/react";
import ProjectImage from "./ProjectImage";

// Mock the useTranslation hook to avoid issues with i18n.
vi.mock("next-i18next", async () => {
  const mod: any = await vi.importActual("next-i18next");
  return { ...mod, useTranslation: () => ({ t: (key: string) => key }) };
});

describe("<ProjectImage/>", () => {
  const mockProps = {
    url: "https://example.com",
    src: "test.jpg",
    alt: "Test Image"
  };

  it("renders an image", () => {
    render(<ProjectImage {...mockProps} />);
    const image = screen.getByAltText("Test Image");
    expect(image).toBeInTheDocument();
  });

  it("renders an anchor element with the correct href attribute when url is provided", () => {
    render(<ProjectImage {...mockProps} />);
    const anchor = screen.getByRole("link");
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute("href", "https://example.com");
    expect(anchor).toHaveAttribute("target", "_blank");
    expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders an anchor element with href attribute '#' when url is not provided", () => {
    render(<ProjectImage src="test.jpg" alt="Test Image" />);
    const anchor = screen.getByRole("link");
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute("href", "#");
    expect(anchor).toHaveAttribute("target", "_blank");
    expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
  });
});
