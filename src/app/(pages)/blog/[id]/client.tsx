"use client";

import Clock from "@icons/clock.svg";
import ClockRotateRight from "@icons/clock-rotate-right.svg";

type HeaderDateProps = {
  publishedAt: string | number | Date;
  updatedAt: string | number | Date;
};

export function HeaderDate({ publishedAt, updatedAt }: HeaderDateProps) {
  const published = new Date(publishedAt).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const updated = new Date(updatedAt).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <section className="grid place-content-center gap-1">
        <div className="flex w-24 items-center justify-items-center space-x-1.5">
          <span className="stroke-current text-[.75em]">
            <Clock />
          </span>
          <span className="text-[.875em] font-semibold">Published</span>
        </div>
        <time className="justify-self-center text-center" dateTime={String(publishedAt)}>
          {published}
        </time>
      </section>
      {published !== updated && (
        <section className="grid place-content-center gap-1">
          <div className="flex items-center justify-items-center space-x-1.5">
            <span className="stroke-current text-[.75em]">
              <ClockRotateRight />
            </span>
            <span className="text-[.875em] font-semibold">Updated</span>
          </div>
          <time className="justify-self-center text-center" dateTime={String(updatedAt)}>
            {updated}
          </time>
        </section>
      )}
    </>
  );
}
