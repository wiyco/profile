import Link from "next/link";
import Image from "next/image";
import { postParams } from "@/types";
import { getPosts } from "@/lib/getJsonPlaceholder";
import PageMeta from "@/components/PageMeta";
import Card from "@/components/cards/Card";

export default function Blog({ posts }: { posts: Array<postParams> }) {
  return (
    <>
      <PageMeta title="Blog" description="wiyco's blog." />
      <div className="z-10 flex-1 w-full max-w-4xl text-base flex flex-col items-center justify-start space-y-8">
        <span className="self-center p-4 text-2xl border-b border-zinc-700 dark:border-zinc-200">
          <h2 className="">Blog</h2>
        </span>
        <div className="self-start flex-1 w-full p-2">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 content-start">
            {posts.map((post, index) => (
              <li className="" key={index} title={post.title}>
                <Card post={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
