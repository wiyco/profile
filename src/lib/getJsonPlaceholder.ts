import { postParams } from "@/types";

type postsParams = Array<postParams>;

export async function getPosts(): Promise<postsParams> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}

export async function getPost(slug: string): Promise<postParams> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}
