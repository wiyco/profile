import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import type { RouteParams } from "@/types";

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

  return NextResponse.json(post);
}
