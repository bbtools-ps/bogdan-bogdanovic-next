import { formatDate, sortData } from "./utils";

describe("formatDate()", () => {
  it("returns formatted date for default locale", () => {
    const date = "2022-03-01T05:30:00.000Z";
    const expectedOutput = "Mar 2022";
    expect(formatDate(date)).toEqual(expectedOutput);
  });

  it("returns formatted date for specified locale", () => {
    const date = "2022-03-01T05:30:00.000Z";
    const expectedOutput = "mars 2022";
    expect(formatDate(date, "fr-FR")).toEqual(expectedOutput);
  });

  it("throws error for invalid date", () => {
    expect(() => {
      formatDate("invalid-date");
    }).toThrowError("Invalid Date");
  });
});

describe("sortData()", () => {
  const data = [
    {
      createTime: "2022-01-01T00:00:00.000Z",
      name: "Item 1"
    },
    {
      createTime: "2022-02-01T00:00:00.000Z",
      name: "Item 2"
    },
    {
      createTime: "2022-03-01T00:00:00.000Z",
      name: "Item 3"
    }
  ];

  it("should sort the data in descending order by default", () => {
    const result = sortData(data);
    expect(result).toEqual([
      {
        createTime: "2022-03-01T00:00:00.000Z",
        name: "Item 3"
      },
      {
        createTime: "2022-02-01T00:00:00.000Z",
        name: "Item 2"
      },
      {
        createTime: "2022-01-01T00:00:00.000Z",
        name: "Item 1"
      }
    ]);
  });

  it("should sort the data in ascending order if orderBy is ASC", () => {
    const result = sortData(data, "ASC");
    expect(result).toEqual([
      {
        createTime: "2022-01-01T00:00:00.000Z",
        name: "Item 1"
      },
      {
        createTime: "2022-02-01T00:00:00.000Z",
        name: "Item 2"
      },
      {
        createTime: "2022-03-01T00:00:00.000Z",
        name: "Item 3"
      }
    ]);
  });

  it("should throw an error if any of the createTime values are invalid dates", () => {
    const invalidData = [
      {
        createTime: "2022-01-01T00:00:00.000Z",
        name: "Item 1"
      },
      {
        createTime: "invalid date",
        name: "Item 2"
      },
      {
        createTime: "2022-03-01T00:00:00.000Z",
        name: "Item 3"
      }
    ];

    expect(() => sortData(invalidData)).toThrow("Invalid Date");
  });
});
