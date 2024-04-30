import { permanentRedirect, RedirectType } from "next/navigation";

import { CardPost } from "@/components/cards/CardPost";
import { Pagination } from "@/components/navigations/Pagination";
import type { SearchParams } from "@/types";
import { paginationApiRequest } from "@/types/api/pagination";
import { getAvatar } from "@/utils/fetch/avatar";
import { getPosts } from "@/utils/fetch/post";

const paginationSettings = {
  itemsPerPage: Number(process.env.NEXT_PUBLIC_PAGINATION_LIMIT) || 3,
};

type ArticleProps = {
  searchParams: SearchParams;
};

export async function Article({ searchParams }: ArticleProps) {
  /** The `page` param is not set */
  if (!searchParams?.page) {
    return permanentRedirect(`?page=1`, RedirectType.replace);
  }
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

  const posts = await getPosts(limit, offset);
  /** The page number is out of range (max) */
  if (offset + 1 > posts.count) {
    return permanentRedirect(
      `?page=${Math.ceil(posts.count / paginationSettings.itemsPerPage)}`,
      RedirectType.replace
    );
  }
  /** Retrieve the avatar url for each post */
  const postsWithAvatar = await Promise.all(
    posts.results.map(async (item) => {
      return {
        ...item,
        user: {
          ...item.user,
          avatar: await getAvatar(item.user?.avatar || "", "webp").then((res) => res),
        },
      };
    })
  );

  return (
    <>
      <article className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {postsWithAvatar.map((item, index) => (
          <CardPost
            key={index}
            title={item.title}
            thumbnail={item.thumbnail}
            url={`/blog/${item.id}`}
            author={{
              name: item.user.username,
              avatar: item.user.avatar,
            }}
            timestamp={item.createdAt}
          />
        ))}
      </article>
      <Pagination
        className="mx-auto"
        count={posts.count}
        itemsPerPage={paginationSettings.itemsPerPage}
        initialPage={pageNumber}
      />
    </>
  );
}
