import { render, screen } from "@testing-library/react";
import SocialLink from "./SocialLink";

describe("<SocialLink/>", () => {
  it("renders with children and the correct icon", () => {
    render(
      <SocialLink href="https://github.com/" type="github">
        GitHub
      </SocialLink>
    );

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://github.com/");

    const icon = screen.getByTestId("github-icon");
    expect(icon).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
  });

  it("renders a different icon for a different type prop", () => {
    render(<SocialLink href="https://www.linkedin.com/" type="linkedin" />);

    const icon = screen.getByTestId("linkedin-icon");
    expect(icon).toBeInTheDocument();
  });

  it("should open the link in a new tab", () => {
    render(<SocialLink href="https://www.linkedin.com/" type="linkedin" />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should be accessible when only icon is passed as a prop", () => {
    render(<SocialLink href="https://www.linkedin.com/" type="linkedin" />);
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
  });
});
