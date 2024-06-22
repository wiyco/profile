import { hasMusicInTitle, isYouTubeLink } from "@/utils/embedder/youtube";

export function IframeBlock(props: React.ComponentProps<"iframe">) {
  if (!props.src) return;

  if (isYouTubeLink(props.src)) {
    if (hasMusicInTitle(props.title ?? "")) {
      return (
        <div
          className="mx-auto mb-8 aspect-square w-full overflow-clip rounded-xl"
          style={{ maxWidth: "448px" }}
        >
          <iframe {...props} width={undefined} height={undefined} className="h-full w-full" />
        </div>
      );
    }
    return (
      <div
        className="mx-auto mb-8 aspect-video w-full overflow-clip rounded-xl"
        style={{ maxWidth: "640px" }}
      >
        <iframe {...props} width={undefined} height={undefined} className="h-full w-full" />
      </div>
    );
  }
  return (
    <div className="mx-auto mb-8 h-full w-full overflow-clip rounded-xl">
      <iframe {...props} width={undefined} height={undefined} className="h-full w-full" />
    </div>
  );
}
