import { useMemo } from "react";
import useSWR from "swr";

import { fetcher } from "@/lib/swr";
import { getPosts } from "@/utils/fetcher/post";

type UseBlogProps = {
  pageNumber: number;
  itemsPerPage: number;
  serverSideCount: number;
};

function useBlog({ pageNumber, itemsPerPage, serverSideCount }: UseBlogProps) {
  const offset = useMemo(() => (pageNumber - 1) * itemsPerPage, [pageNumber, itemsPerPage]); // offset 0 = no offset

  const { data, error, isLoading } = useSWR<Awaited<ReturnType<typeof getPosts>>>(
    `/api/v0/posts?limit=${itemsPerPage}&offset=${offset}`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  return {
    offset,
    data: {
      results: data?.results ?? [],
      count: data?.count ?? serverSideCount,
    },
    error,
    isLoading,
  };
}

export { useBlog };
