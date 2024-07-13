import { Suspense } from "react";

import { ArchiveSuspense } from "@/components/skeletons/ArchiveSuspense";

import { Archive } from "./archive";

export default function Page() {
  return (
    <div className="default-wrap mx-auto max-w-screen-md">
      <h1>
        <span>Archive</span>
      </h1>
      <Suspense fallback={<ArchiveSuspense />}>
        <Archive />
      </Suspense>
    </div>
  );
}
