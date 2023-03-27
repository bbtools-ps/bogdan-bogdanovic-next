import { render } from "@testing-library/react";
import SectionContent from "./SectionContent";

describe("<SectionContent/>", () => {
  const data = [{ name: "project1" }, { name: "project2" }];

  it("renders children if data is provided", () => {
    const { getByText } = render(
      <SectionContent data={data} noResultsMessage="No results">
        <ul>
          {data.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </SectionContent>
    );
    expect(getByText("project1")).toBeInTheDocument();
    expect(getByText("project2")).toBeInTheDocument();
  });

  it("renders no results message if data is empty", () => {
    const { getByText } = render(
      <SectionContent data={[]} noResultsMessage="No results">
        <ul>
          {data.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </SectionContent>
    );
    expect(getByText("No results")).toBeInTheDocument();
  });
});
