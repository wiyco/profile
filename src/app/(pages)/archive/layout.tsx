import { ARCHIVE_METADATA } from "@constants/metadata/archive";
import type { Metadata } from "next";

export const metadata: Metadata = ARCHIVE_METADATA;

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
