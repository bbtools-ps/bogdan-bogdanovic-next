import { render, screen } from "@testing-library/react";
import ButtonLink from "./ButtonLink";

window.open = vi.fn();

describe("<ButtonLink/>", () => {
  const testUrl = "https://example.com";
  const testButtonText = "Button Text";

  it("should render without errors", () => {
    render(<ButtonLink url={testUrl}>{testButtonText}</ButtonLink>);
    const button = screen.getByRole("button", { name: testButtonText });
    expect(button).toBeInTheDocument();
  });

  it("should open a new tab with the provided URL when clicked", () => {
    render(<ButtonLink url={testUrl}>{testButtonText}</ButtonLink>);
    const button = screen.getByRole("button", { name: testButtonText });
    expect(button).toHaveAttribute("href", testUrl);
    expect(button).toHaveAttribute("target", "_blank");
  });

  it('should display the source icon when type is "source"', () => {
    render(
      <ButtonLink url={testUrl} icon="source">
        {testButtonText}
      </ButtonLink>
    );
    const button = screen.getByRole("button", { name: testButtonText });
    const icon = screen.getByTestId("source-icon");
    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('should display the live icon when type is "live"', () => {
    render(
      <ButtonLink url={testUrl} icon="live">
        {testButtonText}
      </ButtonLink>
    );
    const button = screen.getByRole("button", { name: testButtonText });
    const icon = screen.getByTestId("live-icon");
    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('should display the info icon when type is "info"', () => {
    render(
      <ButtonLink url={testUrl} icon="info">
        {testButtonText}
      </ButtonLink>
    );
    const button = screen.getByRole("button", { name: testButtonText });
    const icon = screen.getByTestId("info-icon");
    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
