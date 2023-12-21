import FileNotFound from "@icons/file-not-found.svg";
import type { Metadata } from "next";

import { HistoryBackButton } from "@/components/buttons/HistoryBackButton";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Page not found.",
};

export default function NotFound() {
  return (
    <div className="default-wrap !content-between justify-items-center">
      <h1>
        <span>404</span>
      </h1>
      <div className="grid justify-items-center gap-4">
        <span className="stroke-current text-3xl">
          <FileNotFound />
        </span>
        <p>Not Found</p>
      </div>
      <HistoryBackButton className="text-lg" />
    </div>
  );
}
