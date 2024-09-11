"use client";

import NavArrowDown from "@icons/nav-arrow-down.svg";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import Link from "next/link";
import { Fragment } from "react";

import { cn } from "@/utils/cn";

import { useNavExpander } from "./NavExpander.hooks";

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
  className?: string;
};

export function NavExpander({ navItems, className }: NavExpanderProps) {
  const { isOpen, handleOpenChange } = useNavExpander({ navItems });

  return (
    <nav className={className}>
      <ul className="grid grid-cols-3 justify-items-center">
        {navItems.map((item, itemIndex) => (
          <Fragment key={itemIndex}>
            {/* Mobile */}
            <li className="block md:hidden">
              <Dropdown onOpenChange={(isOpen) => handleOpenChange({ key: item.header, isOpen })}>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="bg-transparent p-0 font-semibold text-white data-[hover=true]:bg-transparent"
                    variant="light"
                    radius="sm"
                    endContent={
                      <span
                        className={cn(
                          "stroke-white text-tiny transition-transform duration-150 ease-in-out",
                          isOpen[item.header as keyof typeof isOpen]
                            ? "translate-y-px rotate-180"
                            : "translate-y-0 rotate-90"
                        )}
                      >
                        <NavArrowDown />
                      </span>
                    }
                    aria-label="Navigation"
                  >
                    {item.header}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  {item.children.map((child, childIndex) => (
                    <DropdownItem
                      key={`${itemIndex}-${childIndex}`}
                      href={child.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      isReadOnly
                      showDivider={childIndex !== item.children.length - 1}
                      className="py-2.5"
                    >
                      {child.label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </li>
            {/* Desktop */}
            <li className="hidden h-fit gap-3 md:grid">
              <h2 className="text-lg font-semibold">{item.header}</h2>
              <ul className="grid gap-2">
                {item.children.map((child, childIndex) => (
                  <li key={`${itemIndex}-${childIndex}`}>
                    <Link href={child.url} target="_blank" rel="noopener noreferrer">
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}
