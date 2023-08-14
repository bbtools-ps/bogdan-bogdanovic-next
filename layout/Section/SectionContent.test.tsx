import { render, screen } from "@testing-library/react";
import SectionContent from "./SectionContent";

describe("<SectionContent/>", () => {
  const data = [{ name: "project1" }, { name: "project2" }];

  it("renders children if data is provided", () => {
    render(
      <SectionContent data={data} noResultsMessage="No results">
        <ul>
          {data.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </SectionContent>
    );
    const project1 = screen.getByText("project1");
    const project2 = screen.getByText("project2");
    expect(project1).toBeInTheDocument();
    expect(project2).toBeInTheDocument();
  });

  it("renders no results message if data is empty", () => {
    render(
      <SectionContent data={[]} noResultsMessage="No results">
        <ul>
          {data.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </SectionContent>
    );
    const noResults = screen.getByText("No results");
    expect(noResults).toBeInTheDocument();
  });
});
