import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";

import { IframeBlock } from "./blocks/IframeBlock";
import { ImageBlock } from "./blocks/ImageBlock";
import { LinkBlock } from "./blocks/LinkBlock";
import { PreBlock } from "./blocks/PreBlock";

export function MarkdownRenderer({ children }: { children: string }) {
  return (
    <ReactMarkdown
      className="markdown-wrap"
      remarkPlugins={[remarkGfm, remarkBreaks, remarkUnwrapImages]}
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
