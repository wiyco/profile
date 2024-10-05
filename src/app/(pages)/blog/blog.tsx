import "@/styles/blog.scss";

import { redirect, RedirectType } from "next/navigation";
import { Suspense } from "react";

import { Pagination } from "@/components/navigations/Pagination";
import { paginationApiRequest } from "@/types/api/pagination";
import type { SearchParams } from "@/types/next";
import { getPosts } from "@/utils/fetcher/post";

import { BlogPosts, BlogPostsSkeleton } from "./blog.posts";

const paginationSettings = {
  itemsPerPage: Number(process.env.NEXT_PUBLIC_PAGINATION_LIMIT) || 3,
};

type ArticleProps = {
  searchParams: SearchParams;
};

export async function Blog({ searchParams }: ArticleProps) {
  /** The `page` param is not set */
  if (searchParams?.page === undefined || searchParams?.page === "") {
    return redirect(`?page=1`, RedirectType.replace);
  }
  /** Parse query params related to pagination */
  const pagination = paginationApiRequest.parse({
    limit: paginationSettings.itemsPerPage,
    offset: searchParams.page,
  });
  const pageNumber = pagination.offset;
  /** The page number is out of range (min) */
  if (pageNumber < 1) {
    return redirect(`?page=1`, RedirectType.replace);
  }
  const limit = pagination.limit;
  const offset = (pageNumber - 1) * paginationSettings.itemsPerPage; // offset 0 = no offset
  /** Fetch posts */
  const posts = await getPosts(limit, offset);
  /** The page number is out of range (max) */
  if (offset + 1 > posts.count) {
    return redirect(
      `?page=${Math.ceil(posts.count / paginationSettings.itemsPerPage)}`,
      RedirectType.replace
    );
  }

  return (
    <>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Suspense
          key={pageNumber}
          fallback={<BlogPostsSkeleton itemsNumber={paginationSettings.itemsPerPage} />}
        >
          <BlogPosts posts={posts.results} />
        </Suspense>
      </section>
      <Pagination
        className="mx-auto"
        count={posts.count}
        itemsPerPage={paginationSettings.itemsPerPage}
        initialPage={pageNumber}
      />
    </>
  );
}
