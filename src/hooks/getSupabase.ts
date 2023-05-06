import supabase from "@/hooks/supabase";
import { postData, postsData } from "@/types";

export async function getPosts(): Promise<Array<postsData>> {
  const { data, error } = await supabase
    .rpc("getposts")
    .limit(Number(process.env.NEXT_PUBLIC_SUPABASE_LIMIT) ?? 9);
  if (error) throw new Error(`${error.code} : ${error.message}`);
  return data;
}

export async function getPost(slug: string): Promise<postData> {
  const { data, error } = await supabase.rpc(`getpost`, { slug: Number(slug) });
  if (error) throw new Error(`${error.code} : ${error.message}`);
  return data[0];
}
