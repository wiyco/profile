import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Archive",
    template: "%s - Archive | wiyco",
  },
  description: "wiyco's archive.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
