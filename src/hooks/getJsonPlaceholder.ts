import { jsonPlaceholderData } from "@/types";

export async function getPosts(from: number): Promise<Array<jsonPlaceholderData>> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${from}&_limit=${
      process.env.NEXT_PUBLIC_SUPABASE_LIMIT ?? "9"
    }`
  );
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}

export async function getPost(slug: string): Promise<jsonPlaceholderData> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}
