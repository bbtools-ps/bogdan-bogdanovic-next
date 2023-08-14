import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonLink from "./ButtonLink";

window.open = vi.fn();

describe("<ButtonLink/>", () => {
  const testUrl = "https://example.com";
  const testButtonText = "Button Text";

  it("should render without errors", () => {
    const { getByText } = render(<ButtonLink url={testUrl}>{testButtonText}</ButtonLink>);
    expect(getByText(testButtonText)).toBeInTheDocument();
  });

  it("should open a new tab with the provided URL when clicked", async () => {
    const { getByText } = render(<ButtonLink url={testUrl}>{testButtonText}</ButtonLink>);
    await userEvent.click(getByText(testButtonText));
    expect(window.open).toHaveBeenCalledWith(testUrl, "_blank", "noopener noreferrer");
  });

  it('should display the source icon when type is "source"', () => {
    const { getByText, getByTestId } = render(
      <ButtonLink url={testUrl} icon="source">
        {testButtonText}
      </ButtonLink>
    );
    expect(getByText(testButtonText)).toBeInTheDocument();
    expect(getByTestId("source-icon")).toBeInTheDocument();
  });

  it('should display the live icon when type is "live"', () => {
    const { getByText, getByTestId } = render(
      <ButtonLink url={testUrl} icon="live">
        {testButtonText}
      </ButtonLink>
    );
    expect(getByText(testButtonText)).toBeInTheDocument();
    expect(getByTestId("live-icon")).toBeInTheDocument();
  });

  it('should display the info icon when type is "info"', () => {
    const { getByText, getByTestId } = render(
      <ButtonLink url={testUrl} icon="info">
        {testButtonText}
      </ButtonLink>
    );
    expect(getByText(testButtonText)).toBeInTheDocument();
    expect(getByTestId("info-icon")).toBeInTheDocument();
  });
});
