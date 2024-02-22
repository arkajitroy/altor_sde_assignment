import { Dispatch, SetStateAction } from "react";

export type TNavbarProps = {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
};
