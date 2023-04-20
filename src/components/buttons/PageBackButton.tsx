import { useRouter } from "next/router";
import { Undo } from "iconoir-react";

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
      <Undo />
    </button>
  );
}
