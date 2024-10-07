import { createServerClient } from "@supabase/ssr";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** @see {@link https://supabase.com/docs/guides/auth/server-side/creating-a-client?environment=middleware} */
function supabaseMiddlewareClient(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request: { headers: request.headers } });

  const supabaseClient = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          try {
            cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
            supabaseResponse = NextResponse.next({
              request,
            });
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options)
            );
          } catch {
            console.error(
              "The `setAll` method was called from a Server Component. This can be ignored if you have middleware refreshing user sessions."
            );
          }
        },
      },
    }
  );

  return { supabaseClient, supabaseResponse };
}

export { supabaseMiddlewareClient };
