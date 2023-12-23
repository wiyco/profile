"use client";

import { getDiffDateTime } from "@/utils/datetime/format";

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
