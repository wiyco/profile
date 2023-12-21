import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { paginationApiRequest } from "@/types/api/pagination";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const { limit, offset } = paginationApiRequest.parse({
    limit: params.get("limit"),
    offset: params.get("offset"),
  });

  const [results, count] = await prisma.$transaction([
    prisma.post.findMany({
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        content: true,
        thumbnail: true,
        user: { select: { username: true, avatar: true } },
      },
      orderBy: { createdAt: "desc" },
      take: limit,
      skip: offset,
    }),
    prisma.post.count(),
  ]);

  return NextResponse.json({ results, count });
}
