import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

/** @see {@link https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config} */
export const dynamic = "auto";
export const revalidate = 0;
export const maxDuration = 10;

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");

  if (!path) {
    return NextResponse.json(
      {
        revalidated: false,
        message: "Missing path to revalidate (e.g. ?path=/blog/1)",
        now: new Date(),
      },
      { status: 400 }
    );
  }

  revalidatePath(path.startsWith("/") ? path : `/${path}`, "page");
  return NextResponse.json(
    {
      revalidated: true,
      message: `Revalidated path: ${path}`,
      now: new Date(),
    },
    { status: 200 }
  );
}
