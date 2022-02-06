import React, { createContext, ReactNode, useMemo, useState } from "react";

interface MenuStateContextProps {
  openMenu: boolean | null;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export const MenuStateContext = createContext({} as MenuStateContextProps);

function MenuStateProvider({ children }: { children: ReactNode }) {
  const [openMenu, setOpenMenu] = useState<boolean | null>(null);
  const value = useMemo(
    () => ({
      openMenu,
      setOpenMenu,
    }),
    [openMenu, setOpenMenu]
  );
  return (
    <MenuStateContext.Provider value={value}>
      {children}
    </MenuStateContext.Provider>
  );
}

export default MenuStateProvider;
