import Link from "next/link";
import Image from "next/image";
import Clock from "public/icons/clock.svg";
import ClockRotateRight from "public/icons/clock-rotate-right.svg";
import { postData } from "@/types";
import { getPost } from "@/hooks/getSupabase";
import PageMeta from "@/components/PageMeta";

export default function Post({ post }: { post: postData }) {
  const paragraphs: Array<string> = post.body.split("\n");

  return (
    <>
      <PageMeta title={`${post.title}`} description={`${post.body.charAt(120)}`} />
      <div className="z-10 flex-1 w-full max-w-4xl text-base flex flex-col items-center justify-start space-y-6">
        <span className="self-center p-4 text-2xl border-b border-zinc-700 dark:border-zinc-200">
          <h2 className="">{post.title}</h2>
        </span>
        <div className="text-sm block md:flex items-center justify-center space-x-0 md:space-x-6 space-y-2 md:space-y-0">
          <div className="flex items-center justify-start space-x-2">
            <span className="text-xs inline-flex">
              <Clock className="stroke-current" />
            </span>
            <span className="">
              {`${new Date(post.created_at).toLocaleString("en-US", {
                timeZone: "America/New_York",
                dateStyle: "short",
                timeStyle: "short",
              })}`}
            </span>
          </div>
          <div className="flex items-center justify-start space-x-2">
            <span className="text-xs inline-flex">
              <ClockRotateRight className="stroke-current" />
            </span>
            <span className="">
              {`${new Date(post.updated_at).toLocaleString("en-US", {
                timeZone: "America/New_York",
                dateStyle: "short",
                timeStyle: "short",
              })}`}
            </span>
          </div>
        </div>
        <div className="self-start flex-1 w-full p-2">
          {paragraphs.map((paragraph, index) => (
            <p className="" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const slug = context.params.slug;
  const post = await getPost(slug);
  if (!post) return { notFound: true };

  return {
    props: {
      post: post,
    },
  };
}
