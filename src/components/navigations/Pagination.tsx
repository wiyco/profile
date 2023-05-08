import Link from "next/link";
import { NavArrowLeft, NavArrowRight } from "iconoir-react";

type PaginationProps = {
  setPageIndex: Function;
  pageIndex: number;
  hasMore: boolean;
};

export default function Pagination({ setPageIndex, pageIndex, hasMore }: PaginationProps) {
  return (
    <>
      <button
        className={pageIndex ? "visible" : "invisible"}
        title="Previous"
        aria-label="Previous Page"
        type="button"
        onClick={() => setPageIndex(pageIndex <= 0 ? 0 : pageIndex - 1)}
      >
        <span className="flex items-center justify-center space-x-2">
          <span className="inline-flex">
            <NavArrowLeft />
          </span>
          <span className="">Previous</span>
        </span>
      </button>
      <button
        className={hasMore ? "visible" : "invisible"}
        title="Next"
        aria-label="Next Page"
        type="button"
        onClick={() => setPageIndex(pageIndex + 1)}
      >
        <span className="flex items-center justify-center space-x-2">
          <span className="">Next</span>
          <span className="inline-flex">
            <NavArrowRight />
          </span>
        </span>
      </button>
    </>
  );
}
