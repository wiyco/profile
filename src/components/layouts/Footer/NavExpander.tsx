"use client";

import NavArrowDown from "@icons/nav-arrow-down.svg";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/utils/cn";

type NavItem = {
  header: string;
  children: {
    label: string;
    url: string;
  }[];
};

export type { NavItem };

type NavExpanderProps = {
  navItems: NavItem[];
};

export function NavExpander({ navItems }: NavExpanderProps) {
  const navOpenState = navItems.map((item) => ({ [item.header]: false }));
  const [isOpen, setIsOpen] = useState<typeof navOpenState>(navOpenState);

  return (
    <>
      <ul className="grid grid-cols-3 justify-items-center md:hidden">
        {navItems.map((item, index) => (
          <li key={`foot-nav-mobile-${index}`}>
            <Dropdown
              onOpenChange={(isOpen) => setIsOpen((prev) => ({ ...prev, [item.header]: isOpen }))}
            >
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="bg-transparent p-0 text-white data-[hover=true]:bg-transparent"
                  variant="light"
                  radius="sm"
                  endContent={
                    <span
                      className={cn(
                        "stroke-white text-tiny transition-transform duration-150 ease-in-out",
                        isOpen[item.header as keyof typeof navOpenState]
                          ? "-translate-y-px rotate-0"
                          : "translate-y-px rotate-180"
                      )}
                    >
                      <NavArrowDown />
                    </span>
                  }
                >
                  {item.header}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Navigation">
                {item.children.map((child, index) =>
                  index !== item.children.length - 1 ? (
                    <DropdownItem
                      key={`foot-nav-mobile-child-${index}`}
                      href={child.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      isReadOnly
                      showDivider
                      className="py-2"
                    >
                      {child.label}
                    </DropdownItem>
                  ) : (
                    <DropdownItem
                      key={`foot-nav-mobile-child-${index}`}
                      href={child.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      isReadOnly
                      className="py-2"
                    >
                      {child.label}
                    </DropdownItem>
                  )
                )}
              </DropdownMenu>
            </Dropdown>
          </li>
        ))}
      </ul>
      <ul className="hidden grid-cols-3 justify-items-center md:grid">
        {navItems.map((item, index) => (
          <li key={`foot-nav-${index}`} className="grid h-fit gap-3">
            <h2 className="text-lg">{item.header}</h2>
            <ul className="grid gap-2">
              {item.children.map((child, index) => (
                <li key={`foot-nav-child-${index}`}>
                  <Link href={child.url} target="_blank" rel="noopener noreferrer">
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
