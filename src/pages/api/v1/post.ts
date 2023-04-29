import type { NextApiRequest, NextApiResponse } from "next";
import { getPost } from "@/hooks/getSupabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const slug = req.query.s ? req.query.s : "";
  const post = await getPost(`${slug}`);
  res.status(200).json({ post });
}
