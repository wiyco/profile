import Link from "next/link";
import Image from "next/image";
import { jsonPlaceholderData } from "@/types";
import { getPosts, getPost } from "@/hooks/getJsonPlaceholder";
import PageMeta from "@/components/PageMeta";

type postContext = {
  slug: string;
};

export default function Post({ post }: { post: jsonPlaceholderData }) {
  const paragraphs: Array<string> = post.body.split("\n");

  return (
    <>
      <PageMeta title={`${post.title}`} description={`${post.body.charAt(120)}`} />
      <div className="z-10 flex-1 w-full max-w-4xl text-base flex flex-col items-center justify-start space-y-8">
        <span className="self-center p-4 text-2xl border-b border-zinc-700 dark:border-zinc-200">
          <h2 className="">{post.title}</h2>
        </span>
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

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: postContext }) {
  const post = await getPost(params.slug);

  return {
    props: {
      post: post,
    },
  };
}
