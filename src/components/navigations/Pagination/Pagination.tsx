"use client";

import { Pagination as NextPagination } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { usePagination } from "./Pagination.hooks";

type PaginationProps = {
  className?: string;
  count: number;
  itemsPerPage: number;
  initialPage: number;
  isDisabled?: boolean;
};

export function Pagination({
  className,
  count,
  itemsPerPage,
  initialPage,
  isDisabled,
}: PaginationProps) {
  const router = useRouter();

  const { pageNumber, totalPageNumber, handlePageChange } = usePagination({
    router,
    count,
    itemsPerPage,
    initialPage,
  });

  return (
    <NextPagination
      isDisabled={isDisabled}
      className={className}
      classNames={{
        wrapper: "gap-3",
        item: "w-12",
        cursor:
          "w-12 bg-gradient-to-br from-sky-300 to-blue-600 dark:from-indigo-300 dark:to-violet-600 bg-blend-luminosity dark:bg-blend-hue",
        prev: "w-16",
        next: "w-16",
      }}
      disableAnimation={false}
      disableCursorAnimation={false}
      showControls
      size="lg"
      radius="full"
      variant="light"
      initialPage={initialPage ?? 1}
      total={totalPageNumber}
      page={pageNumber}
      onChange={(page) => handlePageChange(page)}
    />
  );
}
