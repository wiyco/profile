"use client";

import ArrowLeftCircle from "@icons/arrow-left-circle.svg";
import { useRouter } from "next/navigation";

import { useHistoryBackButton } from "./HistoryBackButton.hooks";

type HistoryBackButtonProps = React.ComponentProps<"button">;

export function HistoryBackButton({ className, ...props }: HistoryBackButtonProps) {
  const router = useRouter();

  const { handleClick } = useHistoryBackButton({ router });

  return (
    <button
      {...props}
      className={className}
      type="button"
      title="Back"
      aria-label="Backward Page"
      onClick={() => handleClick()}
    >
      <span className="stroke-current">
        <ArrowLeftCircle />
      </span>
    </button>
  );
}
