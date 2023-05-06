import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { jsonPlaceholderData } from "@/types";
import { getPosts } from "@/hooks/getJsonPlaceholder";
import PageMeta from "@/components/PageMeta";
import Card from "@/components/cards/Card";
import Pagination from "@/components/navigations/Pagination";

type blogProps = {
  posts: Array<jsonPlaceholderData>;
  _posts: Array<jsonPlaceholderData>;
};

export default function Blog({ posts, _posts }: blogProps) {
  const router = useRouter();

  const [pageIndex, setPageIndex] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [pagePosts, setPagePosts] = useState<Array<jsonPlaceholderData>>(posts);

  const fetcher = async () => {
    posts = await getPagePosts(pageIndex);
    setPagePosts(posts);
    _posts = await getPagePosts(pageIndex + 1);
    _posts.length ? setHasMore(true) : setHasMore(false);
  };

  useEffect(() => {
    router.push(
      {
        query: {
          p: pageIndex + 1,
        },
      },
      undefined,
      { shallow: false }
    );
    fetcher();
  }, [pageIndex]);

  return (
    <>
      <PageMeta title="Blog" description="wiyco's blog." />
      <div className="z-10 flex-1 w-full max-w-4xl text-base flex flex-col items-center justify-start space-y-6">
        <span className="self-center p-4 text-2xl border-b border-zinc-700 dark:border-zinc-200">
          <h2 className="">Blog/test</h2>
        </span>
        <div className="self-start flex-1 w-full p-2">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 content-start">
            {pagePosts.map((post, index) => (
              <li className="" key={index} title={post.title}>
                <Card post={post} />
              </li>
            ))}
          </ul>
        </div>
        <div className="self-center flex-1 w-full flex items-end justify-between">
          <Pagination setPageIndex={setPageIndex} pageIndex={pageIndex} hasMore={hasMore} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPagePosts(0);
  const _posts = await getPagePosts(1);

  return {
    props: {
      posts: posts,
      _posts: _posts,
    },
    revalidate: 60,
  };
}

async function getPagePosts(pageIndex: number): Promise<Array<jsonPlaceholderData>> {
  const posts = await getPosts(pageIndex * (Number(process.env.NEXT_PUBLIC_SUPABASE_LIMIT) ?? 9));

  return [
    ...posts.map((post) => ({
      id: post.id,
      created_at: new Date().toString(),
      updated_at: new Date().toString(),
      title: post.title,
      body: post.body,
      user_id: 1,
      user_name: "",
      avatar: "",
      thumbnail: "",
    })),
  ];
}
