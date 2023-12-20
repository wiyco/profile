import { formatDistance } from "date-fns";

export const getDiffDateTime = (prevDate: Date, lateDate: Date) =>
  formatDistance(prevDate, lateDate, { addSuffix: true, includeSeconds: true });
