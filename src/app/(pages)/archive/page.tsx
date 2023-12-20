import { CardFull } from "@/components/cards/CardFull";
import { getArchives } from "@/utils/fetch/archive";

export default async function Page() {
  const archives = await getArchives();

  return (
    <div className="default-wrap mx-auto max-w-screen-2xl">
      <h1>
        <span>Archive</span>
      </h1>
      <article className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {archives.map((item, index) => (
          <CardFull key={index} title={item.title} thumbnail={item.thumbnail} url={item.url} />
        ))}
      </article>
    </div>
  );
}
