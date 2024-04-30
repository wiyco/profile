export function IframeBlock(props: React.ComponentProps<"iframe">) {
  if (!props.src) return;

  if (props.src.includes("youtube")) {
    // if (props.src.includes("shorts")) {
    //   return (
    //     <div className="relative mx-auto h-[60dvh] md:h-[30dvh]">
    //       <iframe
    //         {...props}
    //         width="100%"
    //         height="100%"
    //         className={cn(props.className, "aspect-[9/16] rounded-xl")}
    //       />
    //     </div>
    //   );
    // }
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
