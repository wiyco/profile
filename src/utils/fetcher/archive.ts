import type { Archive } from "@/types";

/** @see {@link https://nextjs.org/docs/app/api-reference/functions/fetch} */

async function getArchives(): Promise<Archive[]> {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_ARCHIVE_URL!, {
      cache: "force-cache",
      next: { revalidate: 600 },
    });
    if (!res.ok) {
      console.error(res.statusText);
      return [];
    }
    const data: Archive[] = await res.json();
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export { getArchives };
