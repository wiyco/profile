import type { NextApiRequest, NextApiResponse } from "next";
import { getPost } from "@/hooks/getSupabase";

export const config = { runtime: "edge" };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const slug = req.query.s ?? "1";
  const post = await getPost(`${slug}`);
  res.status(200).json({ post });
}
