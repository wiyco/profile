import { type NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { paginationApiRequest } from "@/types/api/pagination";

/** @see {@link https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config} */
export const dynamic = "auto";
export const revalidate = 3600;
export const maxDuration = 10;

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const { limit, offset } = paginationApiRequest.parse({
    limit: params.get("limit"),
    offset: params.get("offset"),
  });

  try {
    const [results, count] = await prisma.$transaction([
      prisma.post.findMany({
        where: { status: "public" },
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
      prisma.post.count({ where: { status: "public" } }),
    ]);

    return NextResponse.json({ results, count }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ results: [], count: 0 }, { status: 502 });
  }
}
