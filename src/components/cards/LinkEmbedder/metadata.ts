import { ImageLinks } from "@constants/links";

import { linkToDomain } from "@/utils/converter/link-to-domain";
import { getMetadataFromUrlWithCache } from "@/utils/embedder/metadata";
import { isExternalPath } from "@/utils/path";

function metadataSnippet({
  href,
  metadata,
}: {
  href: string;
  metadata: Awaited<ReturnType<typeof getMetadataFromUrlWithCache>>;
}) {
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
    : `https://${domain}${faviconHref?.startsWith("/") ? "" : "/"}${faviconHref}`;

  return {
    title,
    description,
    image,
    favicon,
    domain,
  };
}

export { metadataSnippet };
