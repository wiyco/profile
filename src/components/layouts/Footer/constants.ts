import { MediaLinks } from "@constants/links";

import type { NavItem } from "@/components/layouts/Footer/NavExpander";

const navItems: NavItem[] = [
  {
    header: "Map",
    children: [
      { label: "Home", url: "/" },
      { label: "Archive", url: "/archive" },
      { label: "Blog", url: "/blog?page=1" },
    ],
  },
  {
    header: "About",
    children: [
      { label: "GitHub", url: MediaLinks.GITHUB },
      { label: "X", url: MediaLinks.X },
      { label: "Instagram", url: MediaLinks.INSTAGRAM },
    ],
  },
  {
    header: "More",
    children: [
      { label: "Vercel", url: MediaLinks.VERCEL },
      { label: "Supabase", url: MediaLinks.SUPABASE },
    ],
  },
];

export { navItems };
