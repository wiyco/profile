import { formatDistance } from "date-fns";

function getDiffDateTime(
  prevDate: Parameters<typeof formatDistance>[0],
  lateDate: Parameters<typeof formatDistance>[1]
) {
  return formatDistance(prevDate, lateDate, { addSuffix: true, includeSeconds: true });
}

export { getDiffDateTime };
