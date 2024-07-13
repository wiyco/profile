import { Suspense } from "react";

import { ArticleSkeleton } from "@/components/skeletons/ArticleSkeleton";
import type { SearchParams } from "@/types";

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
      <Suspense fallback={<ArticleSkeleton />}>
        <Blog searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
