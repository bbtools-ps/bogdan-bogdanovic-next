import { render, screen } from "@testing-library/react";
import ExternalLink from "./ExternalLink";

describe("<ExternalLink/>", () => {
  it("renders the children", () => {
    render(<ExternalLink href="https://www.example.com">Click me!</ExternalLink>);
    expect(screen.getByText("Click me!")).toBeInTheDocument();
  });

  it("renders a link with the given href", () => {
    render(<ExternalLink href="https://www.example.com">Click me!</ExternalLink>);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://www.example.com");
  });

  it("renders a link with the appropriate target and rel attributes", () => {
    render(<ExternalLink href="https://www.example.com">Click me!</ExternalLink>);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
