import { Image } from "@nextui-org/react";
import NextImage from "next/image";

import { isExternalPath } from "@/utils/path";

export function ImageBlock(props: React.ComponentProps<"img">) {
  if (!props.src) return;

  return (
    <Image
      as={NextImage}
      radius="none"
      classNames={{
        wrapper: "mx-auto mb-9 w-full",
        img: "mx-auto !h-auto max-h-full w-auto rounded-lg object-contain md:max-h-[384px]",
      }}
      src={props.src}
      alt={props.alt}
      width={512}
      height={512}
      sizes="(max-width: 768px) 100vw, 512px"
      priority
      unoptimized={isExternalPath(props.src)}
    />
  );
}
