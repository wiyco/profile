import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function MarkdownRenderer({ children }: { children: string }): ReactElement {
  return (
    <ReactMarkdown
      className="markdown-wrap"
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: "h2",
        h2: "h3",
        h3: "h4",
        h4: "h5",
        a: (props) => LinkBlock(props),
        img: (props) => ImageBlock(props),
        iframe: (props) => IframeBlock(props),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

function LinkBlock(props: any): ReactElement {
  if (props.href.match("http")) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    );
  } else {
    return <Link href={props.href}>{props.children}</Link>;
  }
}

function ImageBlock(props: any): ReactElement {
  return (
    <span className="flex items-center justify-center">
      <Image
        className="w-full md:w-4/5 h-full"
        src={props.src}
        alt={props.alt}
        width="0"
        height="0"
        sizes="100vw"
        priority
      />
    </span>
  );
}

function IframeBlock(props: any): ReactElement {
  return (
    <div className="flex items-center justify-center">
      <iframe
        width={props.width}
        height={props.height}
        src={props.src}
        title={props.title}
        allow={props.allow}
        allowFullScreen={props.allowfullscreen}
      ></iframe>
    </div>
  );
}
