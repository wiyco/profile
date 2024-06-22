import "@/styles/timeline.scss";

import { CardFull } from "@/components/cards/CardFull";
import { LinkEmbedder } from "@/components/cards/LinkEmbedder";
import { cn } from "@/utils/cn";
import { getArchives } from "@/utils/fetcher/archive";
import { isExternalPath } from "@/utils/path";

export default async function Page() {
  const archives = await getArchives();
  let latestYear: number | null | undefined = null;

  return (
    <div className="default-wrap mx-auto max-w-screen-md">
      <h1>
        <span>Archive</span>
      </h1>
      {/* Mobile */}
      <section className="grid grid-cols-1 md:hidden">
        {archives.map((item, index) => {
          /** If the year is the same as the latest year */
          if (item.year === latestYear) {
            return item.isEmbed || !item.title ? (
              <section className="flex" key={index}>
                <aside className="timeline pl-2"></aside>
                <article className="my-4 ml-6">
                  <LinkEmbedder
                    href={item.url}
                    className="origin-left scale-100 transition-transform duration-250 ease-in-out hover:scale-[1.0125] active:scale-[0.99]"
                  />
                </article>
              </section>
            ) : (
              <section className="flex" key={index}>
                <aside className="timeline pl-2"></aside>
                <CardFull
                  className="flex-1 py-4 pl-6"
                  title={item.title ?? ""}
                  thumbnail={item.thumbnail || ""}
                  isOGImage={item.isOGImage}
                  url={item.url}
                  isExternal={isExternalPath(item.url)}
                />
              </section>
            );
          }
          /** Save the latest year */
          latestYear = item.year;
          /** Is not equal to the latest year */
          return (
            <section className={cn("grid gap-4", index === 0 ? "" : "mt-8")} key={index}>
              <span className="text-lg font-semibold text-neutral-900/75 dark:text-neutral-100/75">
                {item.year || "Enigma"}
              </span>
              <section className="flex">
                <aside className="timeline pl-2"></aside>
                {item.isEmbed || !item.title ? (
                  <article className="my-4 ml-6">
                    <LinkEmbedder
                      href={item.url}
                      className="origin-left scale-100 transition-transform duration-250 ease-in-out hover:scale-[1.0125] active:scale-[0.99]"
                    />
                  </article>
                ) : (
                  <CardFull
                    className="flex-1 py-4 pl-6"
                    title={item.title ?? ""}
                    thumbnail={item.thumbnail || ""}
                    isOGImage={item.isOGImage}
                    url={item.url}
                    isExternal={isExternalPath(item.url)}
                  />
                )}
              </section>
            </section>
          );
        })}
      </section>
      {/* Desktop & Tablet */}
      <section className="hidden grid-cols-1 md:grid">
        {archives.map((item, index) => {
          /** If the year is the same as the latest year */
          if (item.year === latestYear) {
            return (
              <section className="grid grid-cols-6" key={index}>
                <aside className="timeline col-span-1 pr-6">
                  <span></span>
                </aside>
                {item.isEmbed || !item.title ? (
                  <article className="col-span-5 my-4 ml-8">
                    <LinkEmbedder
                      href={item.url}
                      className="origin-left scale-100 transition-transform duration-250 ease-in-out hover:scale-[1.0125] active:scale-[0.99]"
                    />
                  </article>
                ) : (
                  <CardFull
                    className="col-span-5 py-4 pl-8"
                    title={item.title ?? ""}
                    thumbnail={item.thumbnail || ""}
                    isOGImage={item.isOGImage}
                    url={item.url}
                    isExternal={isExternalPath(item.url)}
                  />
                )}
              </section>
            );
          }
          /** Save the latest year */
          latestYear = item.year;
          /** Is not equal to the latest year */
          return (
            <section className={cn("grid grid-cols-6", index === 0 ? "" : "mt-8")} key={index}>
              <aside className="timeline col-span-1 pr-6 text-center">
                <span className="text-xl font-semibold text-neutral-900/75 dark:text-neutral-100/75">
                  {item.year || "Enigma"}
                </span>
              </aside>
              {item.isEmbed || !item.title ? (
                <article className="col-span-5 my-4 ml-8">
                  <LinkEmbedder
                    href={item.url}
                    className="origin-left scale-100 transition-transform duration-250 ease-in-out hover:scale-[1.0125] active:scale-[0.99]"
                  />
                </article>
              ) : (
                <CardFull
                  className="col-span-5 py-4 pl-8"
                  title={item.title ?? ""}
                  thumbnail={item.thumbnail || ""}
                  isOGImage={item.isOGImage}
                  url={item.url}
                  isExternal={isExternalPath(item.url)}
                />
              )}
            </section>
          );
        })}
      </section>
    </div>
  );
}
