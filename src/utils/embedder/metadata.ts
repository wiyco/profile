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
    const metadata = await urlMetadata(url, { descriptionLength: 200 });
    return metadata as ExtractedMetadata;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export { getMetadataFromUrl };
