export const sortDataCreateTime = <T extends { createTime: string }>(
  arr: T[] = [],
  orderBy: "ASC" | "DESC" = "DESC"
): T[] => {
  const sortedArr = [...arr]; // create a copy of the array to avoid mutation
  if (sortedArr.length === 0) {
    return []; // return an empty array if the input array is empty
  }
  sortedArr.sort((a, b) => {
    try {
      const timestampA = Date.parse(a.createTime);
      const timestampB = Date.parse(b.createTime);
      if (!Number.isFinite(timestampA) || !Number.isFinite(timestampB))
        throw new Error(`Invalid date format for objects ${a} and ${b}`);
      return orderBy === "DESC" ? timestampB - timestampA : timestampA - timestampB;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "An error occurred while sorting";
      console.error(`Error sorting objects ${a} and ${b}: ${errorMsg}`);
      return 0; // return 0 to keep the order of the objects unchanged
    }
  });
  return sortedArr;
};

export const formatDate = (date: string, locale: string | undefined = "en-US") => {
  const timestamp = Date.parse(date);
  if (!Number.isFinite(timestamp)) throw new Error("Invalid Date");
  return new Date(timestamp).toLocaleDateString(locale, {
    year: "numeric",
    month: "short"
  });
};
