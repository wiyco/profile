import "@/styles/markdown.scss";

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
        p: (props) => {
          /** Unwrap the paragraph */
          if (props.node?.children.length === 1) {
            const child = props.node?.children[0];
            /**
             * If there's only one child and it's a `a` tag and the text is the same as the href,
             * return the unwrapped paragraph to render the link as a block element.
             * @example
             * https://github.com
             * @see LinkBlock -> LinkEmbedder
             */
            if (child.type === "element" && child.tagName === "a") {
              if (
                child.children[0].type === "text" &&
                child.children[0].value === child.properties.href
              ) {
                return <>{props.children}</>;
              }
            }
          }
          /** Wrap the paragraph with a `p` tag */
          return <p>{props.children}</p>;
        },
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
