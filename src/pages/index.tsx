import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import PageMeta from "@/components/PageMeta";
import { LinkBlock, ImageBlock, IframeBlock } from "@/components/blocks/MarkdownRenderer";

export default function Home() {
  const md = `# Welcome to my profile website!
  \n\nI tried to build a website from scratch. This is an original design! Did you like it?
  \n\nAnd... You can access to the [Blog](/blog) page from top of right corner. Try it out!
  \n\nBTW... This website were build w/ [Supabase](https://supabase.com/) & 
  [Vercel](https://vercel.com/).
  \n\nVery nice & awesome services!
  \n\nTo more details, check [my project](https://github.com/wiyco/profile)!
  `;
  return (
    <>
      <PageMeta title="" description="wiyco's website." />
      <div className="page__ z-10 flex-1 w-full max-w-4xl text-base flex flex-col items-center justify-start space-y-6">
        <span className="self-center p-4 text-2xl border-b border-zinc-700 dark:border-zinc-200">
          <h1 className="">Home</h1>
        </span>
        <div className="self-start flex-1 w-full p-2">
          <ReactMarkdown
            className="page__"
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
            {md}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
