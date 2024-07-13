import { Suspense } from "react";

import { ArchiveSkeleton } from "@/components/skeletons/ArchiveSkeleton";

import { Archive } from "./archive";

export default function Page() {
  return (
    <div className="default-wrap mx-auto max-w-screen-md">
      <h1>
        <span>Archive</span>
      </h1>
      <Suspense fallback={<ArchiveSkeleton />}>
        <Archive />
      </Suspense>
    </div>
  );
}
