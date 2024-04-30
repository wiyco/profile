import { YouTubeEmbed } from "@next/third-parties/google";
import Link from "next/link";

import { isExternalPath } from "@/utils/path";

export function LinkBlock(props: React.ComponentProps<"a">) {
  if (!props.href) return;

  const externalOptions = isExternalPath(props.href) && {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  /** YouTube link */
  if (props.href.match(/youtu\.*be/g)) {
    const videoId = props.href
      .split("/")
      .slice(-1)[0]
      .replace("watch?v=", "")
      .replace(/[?&].*/g, "");
    return (
      <div className="mx-auto w-full overflow-clip rounded-xl" style={{ maxWidth: "640px" }}>
        <YouTubeEmbed videoid={videoId} />
      </div>
    );
  }

  return (
    <Link href={props.href} {...externalOptions} className="w-full">
      {props.children}
    </Link>
  );
}
