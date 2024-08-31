import { Suspense } from "react";

import { BlogSkeleton } from "@/components/skeletons/BlogSkeleton";
import type { SearchParams } from "@/types/next";

import { Blog } from "./blog";

type PageProps = {
  searchParams: SearchParams;
};

export default function Page({ searchParams }: PageProps) {
  return (
    <div className="default-wrap mx-auto max-w-screen-lg !content-between">
      <h1>
        <span>Blog</span>
      </h1>
      <Suspense fallback={<BlogSkeleton />}>
        <Blog searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
