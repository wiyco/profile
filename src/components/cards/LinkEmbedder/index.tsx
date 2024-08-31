import { ImageLinks } from "@constants/links";
import { Card, CardBody, Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import NextLink from "next/link";

import { cn } from "@/utils/cn";
import { linkToDomain } from "@/utils/converter/link-to-domain";
import { getMetadataFromUrlWithCache } from "@/utils/embedder/metadata";
import { isYouTubeLink } from "@/utils/embedder/youtube";
import { isExternalPath } from "@/utils/path";
import { sleep } from "@/utils/sleep";

type LinkEmbedderProps = {
  href: string;
  className?: string;
};

export async function LinkEmbedder({ href, className }: LinkEmbedderProps) {
  /** If the link is a YouTube link, sleep for 1 second to prevent 429 error */
  if (isYouTubeLink(href)) {
    await sleep(1000);
  }
  const metadata = await getMetadataFromUrlWithCache(href);
  const title = metadata?.title || metadata?.["og:title"] || metadata?.["twitter:title"] || null;
  const description =
    metadata?.description ||
    metadata?.["og:description"] ||
    metadata?.["twitter:description"] ||
    null;
  const image = metadata?.["og:image"] || ImageLinks.FALLBACK;
  const domain = linkToDomain(href);
  const faviconHref = metadata?.favicons.find(
    (favicon) =>
      favicon.type === "image/png" ||
      favicon.rel === "icon" ||
      favicon.sizes === "32x32" ||
      favicon.href.match(/.+\.png$/) ||
      favicon.href.match(/.+\.ico$/)
  )?.href;
  const favicon = isExternalPath(faviconHref || "/")
    ? faviconHref
    : `https://${domain}${faviconHref}`;

  const isExternal =
    isExternalPath(href) && !href.startsWith(process.env.NEXT_PUBLIC_ORIGIN_URL || "/");

  return (
    <Link
      as={NextLink}
      href={href}
      isExternal={isExternal}
      title={title || undefined}
      className={cn(
        "w-full overflow-clip rounded-xl border-1 border-neutral-600/15 dark:border-neutral-400/15",
        className
      )}
    >
      <Card shadow="none" radius="none" className="w-full bg-inherit">
        <CardBody className="flex h-36 w-full flex-row items-center justify-start p-0">
          <div className="relative aspect-square h-full w-fit md:aspect-[40/21]">
            <Image
              as={NextImage}
              radius="none"
              classNames={{ wrapper: "h-full w-full !max-w-none" }}
              className="h-full w-full object-cover"
              src={image}
              alt={title || "No Image"}
              sizes="(max-width: 768px) 50vw, 50vw"
              fill
              priority={false}
              unoptimized={isExternal}
            />
          </div>
          <section className="grid h-full w-full content-center gap-3 px-6 py-3.5 md:gap-2.5">
            <span className="line-clamp-3 text-sm font-medium md:text-base lg:line-clamp-2">
              {title || domain}
            </span>
            <span className="hidden text-xs font-light text-neutral-800/80 dark:text-neutral-200/80 md:line-clamp-2">
              {description}
            </span>
            <small className="flex items-center space-x-1.5">
              <Image
                as={NextImage}
                radius="none"
                src={favicon}
                alt={domain}
                width={16}
                height={16}
                sizes="16px"
                unoptimized={isExternal}
              />
              <span className="line-clamp-1 text-xs font-light opacity-90">{domain}</span>
            </small>
          </section>
        </CardBody>
      </Card>
    </Link>
  );
}
