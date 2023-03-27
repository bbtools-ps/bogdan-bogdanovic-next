type OrderBy = "ASC" | "DESC";

export const sortData = <T extends { createTime: string }>(
  arr: T[],
  orderBy: OrderBy = "DESC"
): T[] =>
  arr.sort((a, b) => {
    const timestampA = Date.parse(a.createTime);
    if (isNaN(timestampA)) throw new Error("Invalid Date");
    const timestampB = Date.parse(b.createTime);
    if (isNaN(timestampB)) throw new Error("Invalid Date");
    return orderBy === "DESC" ? timestampB - timestampA : timestampA - timestampB;
  });

export const formatDate = (date: string, locale: string | undefined = "en-US") => {
  const timestamp = Date.parse(date);
  if (isNaN(timestamp)) throw new Error("Invalid Date");
  return new Date(timestamp).toLocaleDateString(locale, {
    year: "numeric",
    month: "short"
  });
};
