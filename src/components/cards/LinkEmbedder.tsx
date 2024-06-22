import { ImageLinks } from "@constants/links";
import { Card, CardBody, Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import NextLink from "next/link";

import { linkToDomain } from "@/utils/converter/link-to-domain";
import { getMetadataFromUrl } from "@/utils/embedder/metadata";
import { isExternalPath } from "@/utils/path";

type LinkEmbedderProps = {
  href: string;
};

export async function LinkEmbedder({ href }: LinkEmbedderProps) {
  const metadata = await getMetadataFromUrl(href);
  const title = metadata?.title || metadata?.["og:title"] || metadata?.["twitter:title"] || null;
  const description =
    metadata?.description ||
    metadata?.["og:description"] ||
    metadata?.["twitter:description"] ||
    null;
  const image = metadata?.["og:image"] || ImageLinks.FALLBACK;
  const domain = linkToDomain(href);
  const faviconHref = metadata?.favicons.find((favicon) => favicon.type === "image/png")?.href;
  const favicon = isExternalPath(faviconHref || "/")
    ? faviconHref
    : `https://${domain}${faviconHref}`;

  console.log({ faviconHref, favicon });

  return (
    <Link
      as={NextLink}
      href={href}
      isExternal={
        isExternalPath(href) && !href.startsWith(process.env.NEXT_PUBLIC_ORIGIN_URL || "/")
      }
    >
      <Card
        shadow="none"
        classNames={{ base: "h-full w-full overflow-clip rounded-xl" }}
        className="border-1 border-neutral-600/15 bg-inherit dark:border-neutral-400/15"
      >
        <CardBody className="p-0">
          <div className="flex items-center justify-start">
            <div className="relative aspect-[40/21] h-32 w-fit">
              <Image
                as={NextImage}
                radius="none"
                classNames={{ wrapper: "h-full w-full !max-w-none" }}
                className="h-full w-full object-cover"
                src={image}
                alt={title || "No Image"}
                sizes="(max-width: 768px) 50vw, 50vw"
                fill
                priority
                unoptimized
              />
            </div>
            <section className="grid h-full w-full place-content-center gap-3 px-6 py-3.5">
              <span className="line-clamp-1 text-base font-medium">{title || domain}</span>
              <span className="line-clamp-2 text-xs font-extralight text-neutral-800/80 dark:text-neutral-200/80">
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
                  unoptimized
                />
                <span className="line-clamp-1 text-xs font-light opacity-90">{domain}</span>
              </small>
            </section>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
