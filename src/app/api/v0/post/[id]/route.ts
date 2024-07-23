import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import type { RouteParams } from "@/types";

/** @see {@link https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config} */
export const dynamic = "auto";
export const revalidate = 600;
export const maxDuration = 10;

export async function GET(request: NextRequest, { params }: { params: RouteParams }) {
  const { id } = params;

  const post = await prisma.post.findUnique({
    where: { id },
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
