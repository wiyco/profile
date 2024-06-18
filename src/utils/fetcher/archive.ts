import type { Archive } from "@/types";

async function getArchives(): Promise<Archive[]> {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_ARCHIVE_URL!, { next: { revalidate: 3600 } });
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
