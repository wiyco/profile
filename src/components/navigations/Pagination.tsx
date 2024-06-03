"use client";

import { Pagination as NextPagination } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useMemo, useState } from "react";

type PaginationProps = {
  className?: string;
  count: number;
  itemsPerPage: number;
  initialPage: number;
};

export function Pagination({ className, count, itemsPerPage, initialPage }: PaginationProps) {
  const router = useRouter();

  const [pageNumber, setPageNumber] = useState(1);

  useLayoutEffect(() => setPageNumber(initialPage), [initialPage]);

  const totalPageNumber = useMemo(() => {
    return Math.ceil(count / itemsPerPage);
  }, [count, itemsPerPage]);

  return (
    <NextPagination
      className={className}
      classNames={{
        wrapper: "gap-3",
        item: "w-12",
        cursor:
          "w-12 bg-gradient-to-br from-sky-300 to-blue-600 dark:from-indigo-300 dark:to-violet-600",
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
      onChange={(page) => router.push(`?page=${page}`)}
    />
  );
}
