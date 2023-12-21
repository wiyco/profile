import type { PostWithRelations } from "@/lib/zod/schema";
import type { PaginationApiRequest, PaginationApiResponce } from "@/types/api/pagination";

async function getPosts(
  limit: PaginationApiRequest["limit"],
  offset: PaginationApiRequest["offset"]
): Promise<PaginationApiResponce<PostWithRelations>> {
  return await fetch(
    `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/v0/posts?limit=${limit}&offset=${offset}`,
    { next: { revalidate: 3600 } }
  )
    .then((res) => res.json())
    .catch((e) => {
      console.error(e);
    });
}

async function getPost(id: PostWithRelations["id"]): Promise<PostWithRelations> {
  return await fetch(`${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/v0/post/${id}`, {
    next: { revalidate: 3600 },
  })
    .then((res) => res.json())
    .catch((e) => {
      console.error(e);
    });
}

export { getPost, getPosts };
