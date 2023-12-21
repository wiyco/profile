import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s - Blog | wiyco",
  },
  description: "wiyco's blog.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
