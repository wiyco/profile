import { getDiffDateTime } from "@/utils/formatter/datetime-diff";

type TimeDiffProps = {
  timestamp: Parameters<typeof getDiffDateTime>[0];
  className?: string;
};

export function TimeDiff({ timestamp, className }: TimeDiffProps) {
  const diff = getDiffDateTime(new Date(timestamp), new Date());

  return (
    <time className={className} dateTime={String(timestamp)}>
      {diff}
    </time>
  );
}
