import { type NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { type Post, PostSchema } from "@/lib/zod/schema";

/** @see {@link https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config} */
export const dynamic = "auto";
export const revalidate = 3600;
export const maxDuration = 10;

type RouteParams = Pick<Post, "id">;

export async function GET(request: NextRequest, { params }: { params: RouteParams }) {
  const safeParsedParams = PostSchema.shape.id.safeParse(params.id);

  if (!safeParsedParams.success) {
    return NextResponse.json(null, { status: 400 });
  }

  const post = await prisma.post.findUnique({
    where: { id: safeParsedParams.data, status: "public" },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      title: true,
      content: true,
      thumbnail: true,
      user: { select: { username: true, avatar: true } },
    },
  });

  if (!post) {
    return NextResponse.json(null, { status: 404 });
  }

  return NextResponse.json(post, { status: 200 });
}
