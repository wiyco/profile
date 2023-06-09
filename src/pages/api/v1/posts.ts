import type { NextApiRequest, NextApiResponse } from "next";

import { getPosts } from "@/hooks/getSupabase";

export const config = { runtime: "edge" };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const posts = await getPosts(Number(req.query.p!) ?? 0);
  res.status(200).json({ posts });
}
