import { CardPostSkeleton } from "@/components/cards/CardPost";

import { paginationSettings } from "./constants";

export function BlogPostsSkeleton() {
  return (
    <>
      {Array.from({ length: paginationSettings.itemsPerPage }).map((_, index) => (
        <CardPostSkeleton key={index} />
      ))}
    </>
  );
}
