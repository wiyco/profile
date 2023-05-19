import Clock from "public/icons/clock.svg";
import ClockRotateRight from "public/icons/clock-rotate-right.svg";

import PageMeta from "@/components/PageMeta";
import MarkdownRenderer from "@/components/renderers/MarkdownRenderer";
import { getPost } from "@/hooks/getSupabase";
import { postData } from "@/types";

export default function Post({ post }: { post: postData }) {
  return (
    <>
      <PageMeta
        title={`${post.title}`}
        description={`${post.body
          .replaceAll("\n", " ")
          .replace(/(?<!.)[ ]*#+[ ]|\[.*\]\(.*\)|(?<!.)[ ]*-[ ]|\*{2}|`+|<iframe(.*)>/gm, "")
          .slice(0, 120)}`}
      />
      <div className="markdown-wrap z-10 flex-1 w-full max-w-4xl text-base flex flex-col items-center justify-start space-y-6">
        <span className="self-center p-4 text-2xl border-b border-zinc-700 dark:border-zinc-200">
          <h1 className="">{post.title}</h1>
        </span>
        <div className="text-sm block md:flex items-center justify-center space-x-0 md:space-x-6 space-y-2 md:space-y-0">
          <div className="flex items-center justify-start space-x-2">
            <span className="text-xs inline-flex">
              <Clock className="stroke-current" />
            </span>
            <span className="">
              {`${new Date(post.created_at).toLocaleString("en-US", {
                timeZone: "JST",
                dateStyle: "short",
                timeStyle: "short",
              })}
              ${" JST"}
              `}
            </span>
          </div>
          <div className="flex items-center justify-start space-x-2">
            <span className="text-xs inline-flex">
              <ClockRotateRight className="stroke-current" />
            </span>
            <span className="">
              {`${new Date(post.updated_at).toLocaleString("en-US", {
                timeZone: "JST",
                dateStyle: "short",
                timeStyle: "short",
              })}
              ${" JST"}
              `}
            </span>
          </div>
        </div>
        <div className="self-start flex-1 w-full p-2">
          <MarkdownRenderer>{post.body}</MarkdownRenderer>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const slug = context.params.slug;
  const post = await getPost(slug);
  if (!post) return { notFound: true };

  context.res.setHeader("Cache-Control", "public, s-maxage=43200, stale-while-revalidate=300");

  return {
    props: {
      post: post,
    },
  };
}
