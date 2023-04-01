import { formatDate, sortDataCreateTime } from "./utils";

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

describe("sortDataCreateTime()", () => {
  const mockData = [
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
    const result = sortDataCreateTime(mockData);
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
    const result = sortDataCreateTime(mockData, "ASC");
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

  it("should return the original array if there is an error parsing create time", () => {
    const mockDataWithError = [
      { id: 1, createTime: "2022-03-24T12:00:00.000Z" },
      { id: 2, createTime: "invalidDate" }
    ];

    const sortedData = sortDataCreateTime(mockDataWithError);

    expect(sortedData[0].id).toEqual(1);
    expect(sortedData[1].id).toEqual(2);
  });

  it("should console.error if there is an error parsing create time", () => {
    const mockError = console.error;
    console.error = vi.fn();

    const mockDataWithError = [
      { id: 1, createTime: "2022-03-24T12:00:00.000Z" },
      { id: 2, createTime: "invalidDate" }
    ];

    sortDataCreateTime(mockDataWithError);

    expect(console.error).toHaveBeenCalled();

    console.error = mockError;
  });

  it("should return an empty array if input array is empty", () => {
    const sortedData = sortDataCreateTime([]);

    expect(sortedData).toEqual([]);
  });
});
