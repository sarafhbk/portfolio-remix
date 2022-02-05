import { useContext } from "react";
import { MenuStateContext } from "../providers/MenuStateProvider";

export default function useMenuState() {
  const context = useContext(MenuStateContext);
  if (context === undefined) {
    throw new Error("useMenuState must be used within a MenuStateProvider");
  }
  return context;
}
