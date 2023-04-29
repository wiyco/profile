import { jsonPlaceholderData } from "@/types";

export async function getPosts(): Promise<Array<jsonPlaceholderData>> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}

export async function getPost(slug: string): Promise<jsonPlaceholderData> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}
