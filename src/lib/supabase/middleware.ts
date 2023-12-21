import { createServerClient } from "@supabase/ssr";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const supabaseMiddlewareClient = (request: NextRequest) => {
  /** NextResponse */
  let supabaseResponse = NextResponse.next({ request: { headers: request.headers } });

  const supabaseClient = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (key) => request.cookies.get(key)?.value,
        set: (key, value, options) => {
          request.cookies.set({ key, value, ...options });
          supabaseResponse = NextResponse.next({ request: { headers: request.headers } });
          supabaseResponse.cookies.set({ key, value, ...options });
        },
        remove: (key, options) => {
          request.cookies.set({ key, value: "", ...options });
          supabaseResponse = NextResponse.next({ request: { headers: request.headers } });
          supabaseResponse.cookies.set({ key, value: "", ...options });
        },
      },
    }
  );

  return { supabaseClient, supabaseResponse };
};

export { supabaseMiddlewareClient };
