import { Suspense } from "react";

import { BlogSkeleton } from "@/components/skeletons/BlogSkeleton";

import { BlogServer } from "./blog.server";

export default function Page() {
  return (
    <div className="default-wrap mx-auto max-w-screen-lg !content-between">
      <h1>
        <span>Blog</span>
      </h1>
      <Suspense fallback={<BlogSkeleton />}>
        <BlogServer />
      </Suspense>
    </div>
  );
}
