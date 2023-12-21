"use client";

import Menu from "@icons/menu.svg";
import Xmark from "@icons/xmark.svg";

type MenuButtonProps = {
  className?: React.HTMLAttributes<HTMLButtonElement>["className"];
  openState: {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
  };
};

export function MenuButton({ className, openState }: MenuButtonProps) {
  return (
    <button
      className={className}
      type="button"
      title="Menu"
      aria-label="Toggle Menu"
      onClick={() => openState.setIsOpen((prev) => !prev)}
    >
      <span className="stroke-current">{openState.isOpen ? <Xmark /> : <Menu />}</span>
    </button>
  );
}
