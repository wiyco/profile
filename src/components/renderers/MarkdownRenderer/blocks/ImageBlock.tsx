import { Image } from "@nextui-org/react";
import NextImage from "next/image";

import { isExternalPath } from "@/utils/path";

export function ImageBlock(props: React.ComponentProps<"img">) {
  if (!props.src) return;

  return (
    <Image
      as={NextImage}
      classNames={{
        wrapper: "mx-auto w-full",
        img: "mx-auto max-h-full md:max-h-[384px] w-auto h-auto object-contain rounded-xl",
      }}
      className="mb-8"
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
