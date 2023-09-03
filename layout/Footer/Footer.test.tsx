import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

// Mock the useTranslation hook to avoid issues with i18n.
vi.mock("next-i18next", async () => {
  const mod: any = await vi.importActual("next-i18next");
  return { ...mod, useTranslation: () => ({ t: (key: string) => key }) };
});

describe("<Footer/>", () => {
  it("renders the email address", () => {
    render(<Footer />);
    expect(screen.getByText(/bogdi\.mail@gmail\.com/i)).toBeInTheDocument();
  });

  it("renders the Github link", () => {
    render(<Footer />);
    expect(screen.getByTestId("github-icon")).toBeInTheDocument();
    expect(screen.getByText(/github/i)).toHaveAttribute("href", "https://github.com/bbtools-ps/");
  });

  it("renders the Behance link", () => {
    render(<Footer />);
    expect(screen.getByTestId("behance-icon")).toBeInTheDocument();
    expect(screen.getByText(/behance/i)).toHaveAttribute(
      "href",
      "https://www.behance.net/bogdanbogdanovic"
    );
  });

  it("renders the Linkedin link", () => {
    render(<Footer />);
    expect(screen.getByTestId("linkedin-icon")).toBeInTheDocument();
    expect(screen.getByText(/Linkedin/i)).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/bogdanbogdanovic"
    );
  });

  it("renders the Youtube link", () => {
    render(<Footer />);
    expect(screen.getByTestId("youtube-icon")).toBeInTheDocument();
    expect(screen.getByText(/youtube/i)).toHaveAttribute(
      "href",
      "https://www.youtube.com/user/bogdimail"
    );
  });
});
