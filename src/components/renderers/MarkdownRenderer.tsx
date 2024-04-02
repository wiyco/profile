import { Image, Snippet } from "@nextui-org/react";
import NextImage from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";

import { cn } from "@/utils/cn";

export function MarkdownRenderer({ children }: { children: string }) {
  return (
    <ReactMarkdown
      className="markdown-wrap"
      remarkPlugins={[remarkBreaks]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: "h2",
        h2: "h3",
        h3: "h4",
        h4: "h5",
        h5: "h6",
        h6: "h6",
        a: (props) => LinkBlock(props),
        img: (props) => ImageBlock(props),
        iframe: (props) => IframeBlock(props),
        pre: (props) => PreBlock(props),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

function LinkBlock(props: React.ComponentProps<"a">) {
  if (props.href?.startsWith("http")) {
    return (
      <Link href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </Link>
    );
  }
  return <Link href={props.href ?? ""}>{props.children}</Link>;
}

function ImageBlock(props: React.ComponentProps<"img">) {
  return (
    <Image
      as={NextImage}
      classNames={{ wrapper: "mx-auto w-full md:w-11/12" }}
      src={props.src ?? ""}
      alt={props.alt ?? ""}
      width={480}
      height={480}
      sizes="(max-width: 768px) 100vw, 90vw"
      priority
      unoptimized={props.src?.startsWith("http")}
    />
  );
}

function IframeBlock(props: React.ComponentProps<"iframe">) {
  if (props.src?.includes("youtube")) {
    if (props.src?.includes("shorts")) {
      return (
        <div className="relative mx-auto h-[60dvh] md:h-[30dvh]">
          <iframe
            {...props}
            width="100%"
            height="100%"
            className={cn(props.className, "aspect-[9/16] rounded-xl")}
          />
        </div>
      );
    }
    return (
      <div className="relative mx-auto w-full md:w-11/12">
        <iframe
          {...props}
          width="100%"
          height="100%"
          className={cn(props.className, "aspect-video rounded-xl")}
        />
      </div>
    );
  }
  return (
    <div className="mx-auto h-full w-full md:w-11/12">
      <iframe {...props} width="100%" height="100%" className={cn(props.className, "rounded-xl")} />
    </div>
  );
}

function PreBlock(props: React.ComponentProps<"pre">) {
  return (
    <div className="relative h-fit w-full overflow-hidden">
      <Snippet
        hideSymbol
        classNames={{
          base: "mb-6 mt-1 pl-5 pr-11 w-full overflow-x-auto leading-[1.375rem]",
          copyButton: "mb-6 mt-1 absolute right-2 top-[7px] backdrop-blur-xl",
          pre: "py-1.5 whitespace-pre",
        }}
      >
        {props.children}
      </Snippet>
    </div>
  );
}
