import { redirect } from "next/navigation";

import type { SearchParams } from "@/types/next";
import { getPosts } from "@/utils/fetcher/post";

import { Blog } from "./blog.client";
import { paginationSettings } from "./constants";

type BlogServerProps = {
  searchParams: SearchParams;
};

export async function BlogServer({ searchParams }: BlogServerProps) {
  const pageNumber = Number(searchParams.page);
  /** No isNaN() due to leave the URL when page parameter isn't set */
  if (pageNumber < 1) {
    redirect(`?page=1`);
  }

  const data = await getPosts(paginationSettings.itemsPerPage, 0);

  const totalPageNumber = Math.ceil(data.count / paginationSettings.itemsPerPage);
  if (pageNumber > totalPageNumber) {
    redirect(`?page=${totalPageNumber}`);
  }

  if (data.results.length === 0 || data.count === 0) {
    return (
      <section className="grid place-content-center">
        <p className="text-center text-neutral-800/80 dark:text-neutral-200/80">No posts found</p>
      </section>
    );
  }

  return <Blog count={data.count} />;
}
