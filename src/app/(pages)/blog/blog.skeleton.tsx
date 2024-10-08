import { CardPostSkeleton } from "@/components/cards/CardPost";

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
