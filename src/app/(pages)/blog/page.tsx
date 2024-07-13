import { Suspense } from "react";

import { ArticleSkeleton } from "@/components/skeletons/ArticleSkeleton";
import type { SearchParams } from "@/types";

import { Article } from "./article";

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
        <Article searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
