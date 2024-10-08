"use client";

import "@/styles/blog.scss";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { CardPost } from "@/components/cards/CardPost";
import { Pagination } from "@/components/navigations/Pagination";

import { useBlog } from "./blog.hooks";
import { BlogPostsSkeleton } from "./blog.skeleton";

const paginationSettings = {
  itemsPerPage: Number(process.env.NEXT_PUBLIC_PAGINATION_LIMIT) || 3,
};

export function Blog() {
  const searchParams = useSearchParams();

  const page = searchParams.get("page");
  /** Number(null) will return 0 */
  const pageParsed = useMemo(() => Number(page), [page]);
  const pageNumber = useMemo(
    () => (pageParsed < 1 || isNaN(pageParsed) ? 1 : pageParsed),
    [pageParsed]
  );

  const { data, error, isLoading } = useBlog({
    pageNumber: pageNumber,
    itemsPerPage: paginationSettings.itemsPerPage,
  });

  /**
   * The total number of posts
   * Prevent the count from being 0 when the data is not loaded
   * (safekeeping total page number of pagination to show the cursor)
   */
  const count = useMemo(
    () => data.count || pageNumber * paginationSettings.itemsPerPage,
    [data.count, pageNumber]
  );

  /** @todo Warning: Cannot update a component (`Router`) while rendering a different component */
  // /** The page number is out of range (min) */
  // if (typeof page !== "number" || pageParsed < 1) {
  //   router.replace(`?page=${pageNumber}`, {
  //     scroll: false,
  //   });
  // }
  // /** The page number is out of range (max) */
  // if (offset > count) {
  //   router.replace(`?page=${Math.ceil(count / paginationSettings.itemsPerPage)}`, {
  //     scroll: false,
  //   });
  // }

  if (error) {
    console.error(error);
    return (
      <section className="grid place-content-center">
        <p className="text-center">Failed to load posts</p>
      </section>
    );
  }

  return (
    <>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {isLoading ? (
          <BlogPostsSkeleton itemsNumber={paginationSettings.itemsPerPage} />
        ) : (
          data.results.map((item, index) => (
            <CardPost
              key={index}
              className="blog-item-animation"
              title={item.title}
              thumbnail={item.thumbnail}
              url={`/blog/${item.id}`}
              author={{
                name: item.user?.username,
                avatar: item.user?.avatar,
              }}
              timestamp={item.updatedAt}
              prefetch={true}
            />
          ))
        )}
      </section>
      <Pagination
        className="mx-auto"
        count={count}
        itemsPerPage={paginationSettings.itemsPerPage}
        initialPage={pageNumber}
        isDisabled={isLoading}
      />
    </>
  );
}
