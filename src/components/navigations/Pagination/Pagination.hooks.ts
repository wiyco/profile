import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

export type PaginationProps = {
  router: ReturnType<typeof useRouter>;
  count: number;
  itemsPerPage: number;
  initialPage: number;
};

export function usePagination({ router, count, itemsPerPage, initialPage }: PaginationProps) {
  const pageNumber = useMemo(() => initialPage, [initialPage]);

  const totalPageNumber = useMemo(() => {
    return Math.ceil(count / itemsPerPage);
  }, [count, itemsPerPage]);

  const handlePageChange = useCallback(
    (page: number) => {
      router.push(`?page=${page}`);
    },
    [router]
  );

  return {
    pageNumber,
    totalPageNumber,
    handlePageChange,
  };
}
