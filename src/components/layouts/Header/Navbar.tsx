import "@/styles/navbar.scss";

import Link from "next/link";

import { MenuButton } from "@/components/buttons/MenuButton";
import { ThemeButton } from "@/components/buttons/ThemeButton";
import { navItems } from "@/components/layouts/Header/constants";

export function Navbar() {
  return (
    <nav>
      <ul className="flex items-center justify-center space-x-4">
        {navItems.map((item, index) => (
          <li key={index} className="hidden md:inline-block">
            <Link
              href={item.url}
              title={item.label.charAt(0).toUpperCase() + item.label.slice(1)}
              className="navbar-icon-wrap"
            >
              <span className="stroke-current">{item.icon}</span>
            </Link>
          </li>
        ))}
        <li>
          <ThemeButton className="navbar-icon-wrap" />
        </li>
        <li className="inline-block md:hidden">
          <MenuButton items={navItems} className="!grid !h-8 !w-8 place-content-center" />
        </li>
      </ul>
    </nav>
  );
}
