import { formatDistance } from "date-fns";

export const getDiffDateTime = (
  prevDate: Parameters<typeof formatDistance>[0],
  lateDate: Parameters<typeof formatDistance>[1]
) => formatDistance(prevDate, lateDate, { addSuffix: true, includeSeconds: true });
