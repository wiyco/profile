import { useCallback, useState } from "react";

function useMenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = useCallback((isOpen: boolean) => {
    setIsOpen(isOpen);
  }, []);

  return { isOpen, handleOpenChange };
}

export { useMenuButton };
