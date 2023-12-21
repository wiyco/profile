import type { Archive } from "@/types";

async function getArchives(): Promise<Archive[]> {
  return await fetch(process.env.NEXT_PUBLIC_ARCHIVE_URL!, { next: { revalidate: 3600 } })
    .then((res) => res.json())
    .catch((e) => {
      console.error(e);
    });
}

export { getArchives };
