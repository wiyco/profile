import Link from "next/link";
import { Suspense } from "react";

import { LinkEmbedder } from "@/components/cards/LinkEmbedder";
import { LinkEmbedderSkeleton } from "@/components/cards/LinkEmbedder/skeleton";
import { isExternalPath } from "@/utils/path";

export function LinkBlock(props: React.ComponentProps<"a">) {
  if (!props.href) return;

  const externalOptions = isExternalPath(props.href) && {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  /**
   * Convert to embed card if it's a raw link
   * @example
   * https://github.com
   */
  if (props.children?.toString() === props.href) {
    return (
      <Suspense fallback={<LinkEmbedderSkeleton className="mb-9" />}>
        <LinkEmbedder href={props.href} className="mb-9" />
      </Suspense>
    );
  }

  /**
   * Normal link
   * @example
   * [GitHub](https://github.com)
   */
  return (
    <Link
      href={props.href}
      {...externalOptions}
      className="w-full text-blue-600 visited:text-violet-600 hover:underline dark:text-blue-400 dark:visited:text-violet-400"
    >
      {props.children}
    </Link>
  );
}
