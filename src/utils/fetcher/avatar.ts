import { supabaseBrowserClient } from "@/lib/supabase/client";
import type { User } from "@/lib/zod/schema";

type ImageExtension = "png" | "jpg" | "jpeg" | "webp" | "svg";

async function getAvatar(
  id: User["avatar"] | undefined,
  extension: ImageExtension
): Promise<string | null> {
  if (!id) return null;
  const supabase = supabaseBrowserClient();
  const { data } = await supabase.storage.from("avatars").getPublicUrl(`${id}.${extension}`);
  return data.publicUrl;
}

export { getAvatar };
