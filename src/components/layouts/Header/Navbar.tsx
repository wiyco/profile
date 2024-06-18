import "@/styles/navbar.scss";

import Link from "next/link";

import { MenuButton } from "@/components/buttons/MenuButton";
import { ThemeButton } from "@/components/buttons/ThemeButton";
import { navItems } from "@/components/layouts/Header/constants";

export function Navbar() {
  return (
    <nav>
      <ul className="flex items-center justify-center space-x-4 md:hidden">
        <li className="navbar-icon-wrap">
          <ThemeButton />
        </li>
        <li className="navbar-icon-wrap">
          <MenuButton items={navItems} />
        </li>
      </ul>
      <ul className="hidden items-center justify-center space-x-4 md:flex">
        {navItems.map((item, index) => (
          <li
            key={`nav-${index}`}
            title={item.label.charAt(0).toUpperCase() + item.label.slice(1)}
            className="navbar-icon-wrap"
          >
            <Link href={item.url}>
              <span className="stroke-current">{item.icon}</span>
            </Link>
          </li>
        ))}
        <li className="navbar-icon-wrap">
          <ThemeButton />
        </li>
      </ul>
    </nav>
  );
}
