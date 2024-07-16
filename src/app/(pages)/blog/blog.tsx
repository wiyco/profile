import "@/styles/blog.scss";

import { permanentRedirect, RedirectType } from "next/navigation";

import { CardPost } from "@/components/cards/CardPost";
import { Pagination } from "@/components/navigations/Pagination";
import type { SearchParams } from "@/types";
import { paginationApiRequest } from "@/types/api/pagination";
import { getAvatar } from "@/utils/fetcher/avatar";
import { getPosts } from "@/utils/fetcher/post";

const paginationSettings = {
  itemsPerPage: Number(process.env.NEXT_PUBLIC_PAGINATION_LIMIT) || 3,
};

type ArticleProps = {
  searchParams: SearchParams;
};

export async function Blog({ searchParams }: ArticleProps) {
  /** The `page` param is not set */
  if (!searchParams?.page) {
    return permanentRedirect(`?page=1`, RedirectType.replace);
  }
  /** Parse query params related to pagination */
  const pagination = paginationApiRequest.parse({
    limit: paginationSettings.itemsPerPage,
    offset: searchParams.page,
  });
  const pageNumber = pagination.offset;
  /** The page number is out of range (min) */
  if (pageNumber < 1) {
    return permanentRedirect(`?page=1`, RedirectType.replace);
  }
  const limit = pagination.limit;
  const offset = (pageNumber - 1) * paginationSettings.itemsPerPage; // offset 0 = no offset
  /** Fetch posts */
  const posts = await getPosts(limit, offset);
  /** The page number is out of range (max) */
  if (offset + 1 > posts.count) {
    return permanentRedirect(
      `?page=${Math.ceil(posts.count / paginationSettings.itemsPerPage)}`,
      RedirectType.replace
    );
  }

  /** Remove duplicate avatar ids */
  const uniqueAvatarIds = Array.from(new Set(posts.results.map((item) => item.user?.avatar)));
  /** Record where keys are avatar ids and values are urls */
  const avatarIdToUrlRecord: Record<string, string | null> = await Promise.all(
    uniqueAvatarIds.map(async (avatarId) => {
      return {
        [String(avatarId)]: avatarId
          ? await getAvatar(avatarId, "webp").then((avatarUrl) => avatarUrl)
          : null,
      };
    })
  ).then((record) => Object.assign({}, ...record));

  return (
    <>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.results.map((item, index) => (
          <CardPost
            key={index}
            className="blog-item-animation"
            title={item.title}
            thumbnail={item.thumbnail}
            url={`/blog/${item.id}`}
            author={{
              name: item.user?.username,
              avatar: avatarIdToUrlRecord[String(item.user?.avatar)],
            }}
            timestamp={item.updatedAt}
          />
        ))}
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
