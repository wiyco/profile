import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Card from "@/components/cards/Card";
import Pagination from "@/components/navigations/Pagination";
import PageMeta from "@/components/PageMeta";
import { getPosts } from "@/hooks/getSupabase";
import { postsData } from "@/types";

type blogProps = {
  index: number;
  posts: Array<postsData>;
  hasMore: boolean;
};

export default function Blog({ index, posts, hasMore }: blogProps) {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useState<number>(index);

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
  }, [pageIndex]);

  return (
    <>
      <PageMeta title="Blog" description="wiyco's blog." />
      <div className="z-10 flex-1 w-full max-w-4xl text-base flex flex-col items-center justify-start space-y-6">
        <span className="self-center p-4 text-2xl border-b border-zinc-700 dark:border-zinc-200">
          <h1 className="">Blog</h1>
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
        <div className="self-center flex-1 w-full flex items-end justify-between">
          <Pagination setPageIndex={setPageIndex} pageIndex={pageIndex} hasMore={hasMore} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const index = (Number(context.query.p) ?? 1) - 1 <= 0 ? 0 : (Number(context.query.p) ?? 1) - 1;
  const posts = await getPagePosts(index);
  const _posts = await getPagePosts(index + 1);
  const hasMore = _posts.length ? true : false;

  context.res.setHeader("Cache-Control", "public, s-maxage=43200 stale-while-revalidate=300");

  return {
    props: {
      index: index,
      posts: posts,
      _posts: _posts,
      hasMore: hasMore,
    },
  };
}

async function getPagePosts(pageIndex: number): Promise<Array<postsData>> {
  const posts = await getPosts(pageIndex * (Number(process.env.NEXT_PUBLIC_SUPABASE_LIMIT) ?? 9));

  return [...posts];
}
