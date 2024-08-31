"use client";

import { getDiffDateTime } from "@/utils/formatter/datetime-diff";

type TimeDiffClientProps = {
  timestamp: Parameters<typeof getDiffDateTime>[0];
  className?: React.ComponentProps<"time">["className"];
};

export function TimeDiffClient({ timestamp, className }: TimeDiffClientProps) {
  const diff = getDiffDateTime(new Date(timestamp), new Date());

  return (
    <time className={className} dateTime={String(timestamp)}>
      {diff}
    </time>
  );
}
