"use client";

import Check from "@icons/check.svg";
import Menu from "@icons/menu.svg";
import Xmark from "@icons/xmark.svg";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ThemeButton } from "@/components/buttons/ThemeButton";
import { navItems } from "@/components/layouts/Header/constants";
import { cn } from "@/utils/cn";
import { isCurrentPath } from "@/utils/path";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-center space-x-[1.125rem] md:hidden">
        <ThemeButton />
        <Dropdown
          backdrop="blur"
          onOpenChange={(isOpen) => setIsOpen(isOpen)}
          classNames={{ trigger: "h-unit-8 min-w-unit-8" }}
        >
          <DropdownTrigger>
            <Button
              disableRipple
              className="h-8 min-w-8 bg-transparent p-0 data-[hover=true]:bg-transparent"
              variant="light"
              radius="sm"
            >
              <span
                className={cn(
                  "stroke-current transition-transform duration-300 ease-in-out",
                  isOpen ? "rotate-180" : "rotate-0"
                )}
              >
                {isOpen ? <Xmark /> : <Menu />}
              </span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Navigation">
            {navItems.map((item) => (
              <DropdownItem
                key={`head-nav-${item.label}`}
                href={item.url}
                startContent={<span className="stroke-current">{item.icon}</span>}
                endContent={
                  isCurrentPath(pathname, item.url) && (
                    <span className="stroke-current text-tiny">
                      <Check />
                    </span>
                  )
                }
                className={cn(
                  "py-2.5",
                  isCurrentPath(pathname, item.url) ? "opacity-100" : "opacity-60"
                )}
              >
                {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </nav>
      <nav className="hidden md:block">
        <ul className="flex items-center justify-center space-x-5">
          {navItems.map((item, index) => (
            <li
              key={`nav-${index}`}
              title={item.label.charAt(0).toUpperCase() + item.label.slice(1)}
            >
              <Link href={item.url}>
                <span className="stroke-current">{item.icon}</span>
              </Link>
            </li>
          ))}
          <li className="inline-flex">
            <ThemeButton />
          </li>
        </ul>
      </nav>
    </>
  );
}
