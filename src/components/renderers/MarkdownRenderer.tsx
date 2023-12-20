import { Snippet } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export function MarkdownRenderer({ children }: { children: string }) {
  return (
    <ReactMarkdown
      className="markdown-wrap"
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
      className="mx-auto h-full w-full md:w-4/5"
      src={props.src ?? ""}
      alt={props.alt ?? ""}
      width={640}
      height={640}
      sizes="(max-width: 768px) 100vw, 80vw"
      priority
    />
  );
}

function IframeBlock(props: React.ComponentProps<"iframe">) {
  if (props.src?.includes("youtube")) {
    if (props.src?.includes("shorts")) {
      return (
        <div className="relative mx-auto aspect-[9/16] h-[calc(60dvh)] md:h-[calc(30dvh)]">
          <iframe {...props} />
        </div>
      );
    }
    return (
      <div className="relative mx-auto aspect-video w-full md:w-4/5">
        <iframe {...props} />
      </div>
    );
  }
  return (
    <div className="mx-auto h-full w-full md:w-4/5">
      <iframe {...props} />
    </div>
  );
}

function PreBlock(props: React.ComponentProps<"pre">) {
  return (
    <div className="relative h-fit w-full overflow-hidden">
      <Snippet
        hideSymbol
        classNames={{
          base: "my-8 pl-5 pr-11 w-full overflow-x-auto leading-[1.375rem]",
          copyButton: "my-8 absolute right-2 top-[7px] backdrop-blur-xl",
          pre: "py-1.5 whitespace-pre",
        }}
      >
        {props.children}
      </Snippet>
    </div>
  );
}
