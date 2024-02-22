import { Dispatch, SetStateAction } from "react";

export type TSidebarProps = {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  isNonMobile: boolean;
  drawerWidth: string;
};
