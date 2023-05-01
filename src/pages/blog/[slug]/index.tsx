import Link from "next/link";
import Image from "next/image";
import { Clock, ClockRotateRight } from "iconoir-react";
import { postData } from "@/types";
import { getPost } from "@/hooks/getSupabase";
import PageMeta from "@/components/PageMeta";

type postContext = {
  slug: string;
};

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
            <span className="text-xs">
              <Clock />
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
            <span className="text-xs">
              <ClockRotateRight />
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

// export async function getStaticPaths() {
//   const posts = await getPosts();

//   return {
//     paths: posts.map((post) => ({
//       params: {
//         slug: post.id.toString(),
//       },
//     })),
//     fallback: false,
//   };
// }

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: postContext }) {
  const post = await getPost(params.slug);
  if (!post) return { redirect: { destination: "/404", permanent: false } };

  return {
    props: {
      post: post,
    },
    revalidate: 300,
  };
}
