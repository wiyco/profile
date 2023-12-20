"use client";

import CloudXmark from "@icons/cloud-xmark.svg";
import type { Metadata } from "next";

import { HistoryBackButton } from "@/components/buttons/HistoryBackButton";

export const metadata: Metadata = {
  title: "Error",
  description: "An error has occurred.",
};

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error }: GlobalErrorProps) {
  return (
    <div className="default-wrap !content-between justify-items-center">
      <h1>
        <span>Error</span>
      </h1>
      <div className="grid justify-items-center gap-4">
        <span className="stroke-current text-3xl">
          <CloudXmark />
        </span>
        <p>{error.name}</p>
      </div>
      <HistoryBackButton className="text-lg" />
    </div>
  );
}
