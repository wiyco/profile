"use client";

import Check from "@icons/check.svg";
import Menu from "@icons/menu.svg";
import Xmark from "@icons/xmark.svg";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/utils/cn";
import { isCurrentPath } from "@/utils/path";

type MenuButtonProps = {
  items?: {
    label: string;
    icon: React.ReactNode;
    url: string;
  }[];
  className?: string;
};

export function MenuButton({ items = [], className }: MenuButtonProps) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown backdrop="blur" onOpenChange={(isOpen) => setIsOpen(isOpen)}>
      <DropdownTrigger>
        <Button
          disableRipple
          className={cn(
            "h-6 min-w-6 rounded-xl bg-transparent p-0 data-[hover=true]:bg-transparent",
            className
          )}
          variant="light"
          radius="none"
          title="Menu"
          aria-label="Menu"
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
      <DropdownMenu>
        {items.map((item, index) => (
          <DropdownItem
            key={index}
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
  );
}
