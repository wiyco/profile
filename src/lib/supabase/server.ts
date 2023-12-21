import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseServerClient = (cookieStore: ReturnType<typeof cookies>) =>
  createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (key) => cookieStore.get(key)?.value,
        set: (key, value, options) => void cookieStore.set({ key, value, ...options }),
        remove: (key, options) => void cookieStore.set({ key, value: "", ...options }),
      },
    }
  );

export { supabaseServerClient };
