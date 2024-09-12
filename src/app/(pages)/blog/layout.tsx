import { BLOG_METADATA } from "@constants/metadata/blog";
import type { Metadata } from "next";

export const metadata: Metadata = BLOG_METADATA;

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
