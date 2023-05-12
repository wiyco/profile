import Link from "next/link";
import NavArrowLeft from "public/icons/nav-arrow-left.svg";
import NavArrowRight from "public/icons/nav-arrow-right.svg";

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
            <NavArrowLeft className="stroke-current" />
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
            <NavArrowRight className="stroke-current" />
          </span>
        </span>
      </button>
    </>
  );
}
