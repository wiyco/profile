import { useRouter } from "next/router";
import ArrowLeftCircle from "public/icons/arrow-left-circle.svg";

export default function PageBackButton() {
  const router = useRouter();

  return (
    <button
      className=""
      title="Back"
      aria-label="Backward Page"
      type="button"
      onClick={() => router.back()}
    >
      <span className="">
        <ArrowLeftCircle className="stroke-current" />
      </span>
    </button>
  );
}
