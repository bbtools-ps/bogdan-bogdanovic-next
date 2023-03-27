import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

window.open = vi.fn();

describe("<Button/>", () => {
  const testUrl = "https://example.com";
  const testButtonText = "Button Text";

  it("should render without errors", () => {
    const { getByText } = render(<Button url={testUrl}>{testButtonText}</Button>);
    expect(getByText(testButtonText)).toBeInTheDocument();
  });

  it("should open a new tab with the provided URL when clicked", async () => {
    const { getByText } = render(<Button url={testUrl}>{testButtonText}</Button>);
    await userEvent.click(getByText(testButtonText));
    expect(window.open).toHaveBeenCalledWith(testUrl, "_blank", "noopener noreferrer");
  });

  it('should display the source icon when type is "source"', () => {
    const { getByText, getByTestId } = render(
      <Button url={testUrl} type="source">
        {testButtonText}
      </Button>
    );
    expect(getByText(testButtonText)).toBeInTheDocument();
    expect(getByTestId("source-icon")).toBeInTheDocument();
  });

  it('should display the live icon when type is "live"', () => {
    const { getByText, getByTestId } = render(
      <Button url={testUrl} type="live">
        {testButtonText}
      </Button>
    );
    expect(getByText(testButtonText)).toBeInTheDocument();
    expect(getByTestId("live-icon")).toBeInTheDocument();
  });

  it('should display the info icon when type is "info"', () => {
    const { getByText, getByTestId } = render(
      <Button url={testUrl} type="info">
        {testButtonText}
      </Button>
    );
    expect(getByText(testButtonText)).toBeInTheDocument();
    expect(getByTestId("info-icon")).toBeInTheDocument();
  });
});
