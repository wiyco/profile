import type { PostWithRelations } from "@/lib/zod/schema";
import type { PaginationApiRequest, PaginationApiResponse } from "@/types/api/pagination";

/** @see {@link https://nextjs.org/docs/app/api-reference/functions/fetch} */

async function getPosts(
  limit: PaginationApiRequest["limit"],
  offset: PaginationApiRequest["offset"]
): Promise<PaginationApiResponse<PostWithRelations>> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/v0/posts?limit=${limit}&offset=${offset}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      console.error(res.statusText);
      return { results: [], count: 0 };
    }
    const data: PaginationApiResponse<PostWithRelations> = await res.json();
    return data;
  } catch (e) {
    console.error(e);
    return { results: [], count: 0 };
  }
}

async function getPost(id: PostWithRelations["id"]): Promise<PostWithRelations | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/v0/post/${id}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.error(res.statusText);
      return null;
    }
    const data: PostWithRelations = await res.json();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export { getPost, getPosts };
