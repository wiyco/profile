import { useCallback, useMemo, useState } from "react";

import type { NavItem } from "./NavExpander";

type UseNavExpanderProps = {
  navItems: NavItem[];
};

function useNavExpander({ navItems }: UseNavExpanderProps) {
  const navOpenState = useMemo(
    () => navItems.map((item) => ({ [item.header]: false })),
    [navItems]
  );

  const [isOpen, setIsOpen] = useState<typeof navOpenState>(navOpenState);

  const handleOpenChange = useCallback(({ key, isOpen }: { key: string; isOpen: boolean }) => {
    setIsOpen((prev) => ({ ...prev, [key]: isOpen }));
  }, []);

  return { isOpen, handleOpenChange };
}

export { useNavExpander };
