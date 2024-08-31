import "@/styles/timeline.scss";

import { Fragment, Suspense } from "react";

import { CardFull, CardFullSkeleton } from "@/components/cards/CardFull";
import { LinkEmbedder, LinkEmbedderSkeleton } from "@/components/cards/LinkEmbedder";
import { cn } from "@/utils/cn";
import { getArchives } from "@/utils/fetcher/archive";
import { isExternalPath } from "@/utils/path";

export async function Archive() {
  const archives = await getArchives();
  let latestYear: number | null | undefined = null;

  return (
    <section className="grid grid-cols-1">
      {archives.map((item, index) => {
        /** If the year is the same as the latest year */
        if (item.year === latestYear) {
          return (
            <section key={index} className="flex md:grid md:grid-cols-6">
              <aside className="timeline pl-2 md:col-span-1 md:pr-6"></aside>
              <article className="my-4 ml-6 flex-1 md:col-span-5 md:ml-8">
                {item.isEmbed || !item.title ? (
                  <Suspense fallback={<LinkEmbedderSkeleton />}>
                    <LinkEmbedder href={item.url} className="timeline-item-animation" />
                  </Suspense>
                ) : (
                  <Suspense fallback={<CardFullSkeleton />}>
                    <CardFull
                      className="timeline-item-animation"
                      title={item.title ?? ""}
                      thumbnail={item.thumbnail || ""}
                      isOGImage={item.isOGImage}
                      url={item.url}
                      isExternal={isExternalPath(item.url)}
                    />
                  </Suspense>
                )}
              </article>
            </section>
          );
        }
        /** Save the latest year */
        latestYear = item.year;
        /** Is not equal to the latest year */
        return (
          <Fragment key={index}>
            {/* Mobile */}
            <section className={cn("grid gap-4 md:hidden", index === 0 ? "" : "mt-8")}>
              <span className="text-lg font-semibold text-neutral-900/75 dark:text-neutral-100/75">
                {item.year || "Enigma"}
              </span>
              <section className="flex">
                <aside className="timeline pl-2"></aside>
                <article className="my-4 ml-6 flex-1">
                  {item.isEmbed || !item.title ? (
                    <Suspense fallback={<LinkEmbedderSkeleton />}>
                      <LinkEmbedder href={item.url} className="timeline-item-animation" />
                    </Suspense>
                  ) : (
                    <Suspense fallback={<CardFullSkeleton />}>
                      <CardFull
                        className="timeline-item-animation"
                        title={item.title ?? ""}
                        thumbnail={item.thumbnail || ""}
                        isOGImage={item.isOGImage}
                        url={item.url}
                        isExternal={isExternalPath(item.url)}
                      />
                    </Suspense>
                  )}
                </article>
              </section>
            </section>
            {/* Desktop */}
            <section className={cn("hidden grid-cols-6 md:grid", index === 0 ? "" : "mt-8")}>
              <aside className="timeline col-span-1 pr-6 text-center">
                <span className="text-xl font-semibold text-neutral-900/75 dark:text-neutral-100/75">
                  {item.year || "Enigma"}
                </span>
              </aside>
              <article className="col-span-5 my-4 ml-8 flex-1">
                {item.isEmbed || !item.title ? (
                  <Suspense fallback={<LinkEmbedderSkeleton />}>
                    <LinkEmbedder href={item.url} className="timeline-item-animation" />
                  </Suspense>
                ) : (
                  <Suspense fallback={<CardFullSkeleton />}>
                    <CardFull
                      className="timeline-item-animation"
                      title={item.title ?? ""}
                      thumbnail={item.thumbnail || ""}
                      isOGImage={item.isOGImage}
                      url={item.url}
                      isExternal={isExternalPath(item.url)}
                    />
                  </Suspense>
                )}
              </article>
            </section>
          </Fragment>
        );
      })}
    </section>
  );
}
