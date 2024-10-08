import { getPosts } from "@/utils/fetcher/post";

import { Blog } from "./blog.client";
import { paginationSettings } from "./constants";

export async function BlogServer() {
  const data = await getPosts(paginationSettings.itemsPerPage, 0);

  if (data.results.length === 0 || data.count === 0) {
    return (
      <section className="grid place-content-center">
        <p className="text-center text-neutral-800/80 dark:text-neutral-200/80">No posts found</p>
      </section>
    );
  }

  return <Blog count={data.count} />;
}
