import "@/styles/timeline.scss";

import { CardFullSkeleton } from "@/components/cards/CardFull";
import { LinkEmbedderSkeleton } from "@/components/cards/LinkEmbedder";

export function ArchiveSkeleton() {
  return (
    <section className="grid grid-cols-1">
      <section className="flex md:grid md:grid-cols-6">
        <aside className="timeline pl-2 md:col-span-1 md:pr-6"></aside>
        <article className="my-4 ml-6 flex-1 md:col-span-5 md:ml-8">
          <CardFullSkeleton />
        </article>
      </section>
      <section className="flex md:grid md:grid-cols-6">
        <aside className="timeline pl-2 md:col-span-1 md:pr-6"></aside>
        <article className="my-4 ml-6 w-full md:col-span-5 md:ml-8 md:w-auto">
          <LinkEmbedderSkeleton />
        </article>
      </section>
      <section className="flex md:grid md:grid-cols-6">
        <aside className="timeline pl-2 md:col-span-1 md:pr-6"></aside>
        <article className="my-4 ml-6 w-full md:col-span-5 md:ml-8 md:w-auto">
          <LinkEmbedderSkeleton />
        </article>
      </section>
      <section className="flex md:grid md:grid-cols-6">
        <aside className="timeline pl-2 md:col-span-1 md:pr-6"></aside>
        <article className="my-4 ml-6 flex-1 md:col-span-5 md:ml-8">
          <CardFullSkeleton />
        </article>
      </section>
    </section>
  );
}
