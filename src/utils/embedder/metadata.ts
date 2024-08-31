import { unstable_cache } from "next/cache";
import urlMetadata from "url-metadata";

type ExtractedMetadata = {
  title: string;
  description: string;
  source: string;
  favicons: {
    rel: string;
    href: string;
    sizes: string;
    type: string;
  }[];
  "og:type": string;
  "og:title": string;
  "og:description": string;
  "og:image": string;
  "og:site_name": string;
  "twitter:card": string;
  "twitter:title": string;
  "twitter:description": string;
  "twitter:image": string;
  "twitter:site": string;
  "twitter:creator": string;
};

async function getMetadataFromUrl(url: string): Promise<ExtractedMetadata | null> {
  try {
    /** @see {@link https://github.com/laurengarcia/url-metadata?tab=readme-ov-file#usage} */
    const metadata = await urlMetadata(url, {
      cache: "no-cache",
      mode: "cors",
      descriptionLength: 200,
    });
    return metadata as ExtractedMetadata;
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function getMetadataFromUrlWithCache(href: string) {
  const fetcher = unstable_cache(async () => await getMetadataFromUrl(href), [`metadata-${href}`], {
    revalidate: 3600,
    tags: [`metadata-${href}`],
  });
  return fetcher();
}

export { getMetadataFromUrlWithCache };
