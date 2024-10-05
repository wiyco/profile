import { CardPost, CardPostSkeleton } from "@/components/cards/CardPost";
import type { PostWithRelations } from "@/lib/zod/schema";
import { getAvatar } from "@/utils/fetcher/avatar";

type BlogPostsProps = {
  posts: PostWithRelations[];
};

export async function BlogPosts({ posts }: BlogPostsProps) {
  /** Remove duplicate avatar ids */
  const uniqueAvatarIds = Array.from(new Set(posts.map((item) => item.user?.avatar)));
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
      {posts.map((item, index) => (
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
          prefetch={true}
        />
      ))}
    </>
  );
}

type BlogPostsSkeletonProps = {
  itemsNumber: number;
};

export function BlogPostsSkeleton({ itemsNumber }: BlogPostsSkeletonProps) {
  return (
    <>
      {Array.from({ length: itemsNumber }).map((_, index) => (
        <CardPostSkeleton key={index} />
      ))}
    </>
  );
}
