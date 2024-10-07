import { createBrowserClient } from "@supabase/ssr";

/** @see {@link https://supabase.com/docs/guides/auth/server-side/creating-a-client?environment=client} */
function supabaseBrowserClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export { supabaseBrowserClient };
