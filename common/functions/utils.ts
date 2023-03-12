type OrderBy = "ASC" | "DESC";

export const sortData = <T extends { createTime: string }>(
  arr: T[],
  orderBy: OrderBy = "DESC"
): T[] =>
  arr.sort((a, b) =>
    orderBy === "DESC"
      ? new Date(b.createTime).getTime() - new Date(a.createTime).getTime()
      : new Date(a.createTime).getTime() - new Date(b.createTime).getTime()
  );
