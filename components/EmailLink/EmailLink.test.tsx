import { render, screen } from "@testing-library/react";
import EmailLink from "./EmailLink";

describe("<EmailLink/>", () => {
  it("renders the link with the given email address", () => {
    const email = "test@example.com";
    render(<EmailLink email={email}>Contact me</EmailLink>);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", `mailto:${email}`);
  });

  it("renders the link text", () => {
    render(<EmailLink email="test@example.com">Contact me</EmailLink>);
    const linkElement = screen.getByText("Contact me");
    expect(linkElement).toBeInTheDocument();
  });

  it("renders the link with an envelope icon", () => {
    render(
      <EmailLink email="test@example.com" withIcon>
        Contact me
      </EmailLink>
    );
    const iconElement = screen.getByTestId("email-icon");
    expect(iconElement).toBeInTheDocument();
  });

  it("does not render an envelope icon by default", () => {
    render(<EmailLink email="test@example.com">Contact me</EmailLink>);
    const iconElement = screen.queryByTestId("email-icon");
    expect(iconElement).not.toBeInTheDocument();
  });
});
