import Link from "next/link";
import { useState } from "react";
import Home from "public/icons/home.svg";
import Book from "public/icons/book.svg";
import JournalPage from "public/icons/journal-page.svg";
import ThemeButton from "@/components/buttons/ThemeButton";
import MenuButton from "@/components/buttons/MenuButton";

export default function Navbar() {
  const navItems = [
    { label: "home", icon: <Home className="stroke-current" /> },
    { label: "archive", icon: <Book className="stroke-current" /> },
    { label: "blog", icon: <JournalPage className="stroke-current" /> },
  ];

  const [mounted, setMounted] = useState<boolean>(false);

  return (
    <nav className="flex items-center justify-center">
      <div className="flex md:hidden items-center justify-center">
        <ul className="z-50 flex items-center justify-center space-x-4">
          <li
            className={`inline-flex transition-transform origin-center duration-300 ease-in-out ${
              mounted ? "rotate-180" : ""
            }`}
            key={"menu"}
          >
            <MenuButton setMounted={setMounted} mounted={mounted} />
          </li>
        </ul>
        <div
          className={`z-40 flex items-center justify-center absolute inset-0 w-full h-screen
            transition-transform origin-top-right duration-200 ease-in-out ${
              mounted ? "scale-100" : "scale-0"
            } bg-zinc-50 dark:bg-zinc-800 dark:text-white backdrop-blur`}
        >
          <ul className="flex flex-col items-center justify-center space-y-8">
            {navItems.map((item, index) => (
              <li
                className="inline-flex w-full"
                key={`nav-mobile-${index}`}
                title={`${item.label.charAt(0).toUpperCase()}${item.label.slice(1)}`}
              >
                <Link href={`/${item.label === "home" ? "" : item.label}`}>
                  <span className="flex items-center justify-center space-x-4">
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label.toUpperCase()}</span>
                  </span>
                </Link>
              </li>
            ))}
            <li className="inline-flex absolute bottom-0 right-0 p-4" key={"theme"}>
              <span className="text-lg">
                <ThemeButton />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center justify-center space-x-4">
          {navItems.map((item, index) => (
            <li
              className="inline-flex"
              key={`nav-${index}`}
              title={`${item.label.charAt(0).toUpperCase()}${item.label.slice(1)}`}
            >
              <Link href={`/${item.label === "home" ? "" : item.label}`}>
                <span className="">{item.icon}</span>
              </Link>
            </li>
          ))}
          <li className="inline-flex" key={"theme"}>
            <ThemeButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}
