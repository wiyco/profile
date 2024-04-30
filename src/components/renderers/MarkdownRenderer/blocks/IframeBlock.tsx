export function IframeBlock(props: React.ComponentProps<"iframe">) {
  if (!props.src) return;

  if (props.src.includes("youtube")) {
    if (props.title?.toLocaleLowerCase().includes("music")) {
      return (
        <div
          className="mx-auto aspect-square w-full overflow-clip rounded-xl"
          style={{ maxWidth: "448px" }}
        >
          <iframe {...props} width={undefined} height={undefined} className="h-full w-full" />
        </div>
      );
    }
    return (
      <div
        className="mx-auto aspect-video w-full overflow-clip rounded-xl"
        style={{ maxWidth: "640px" }}
      >
        <iframe {...props} width={undefined} height={undefined} className="h-full w-full" />
      </div>
    );
  }
  return (
    <div className="mx-auto h-full w-full overflow-clip rounded-xl">
      <iframe {...props} width={undefined} height={undefined} className="h-full w-full" />
    </div>
  );
}
