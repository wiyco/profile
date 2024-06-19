import { formatDistanceStrict } from "date-fns";

function getDiffDateTime(
  prevDate: Parameters<typeof formatDistanceStrict>[0],
  lateDate: Parameters<typeof formatDistanceStrict>[1]
) {
  return formatDistanceStrict(prevDate, lateDate, { addSuffix: true });
}

export { getDiffDateTime };
