"use client";

import ArrowLeftCircle from "@icons/arrow-left-circle.svg";
import { useRouter } from "next/navigation";

type HistoryBackButtonProps = {
  className?: string;
};

export function HistoryBackButton({ className }: HistoryBackButtonProps) {
  const router = useRouter();

  return (
    <button
      className={className}
      type="button"
      title="Back"
      aria-label="Backward Page"
      onClick={() => router.back()}
    >
      <span className="stroke-current">
        <ArrowLeftCircle />
      </span>
    </button>
  );
}
