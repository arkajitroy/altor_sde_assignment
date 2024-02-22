import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../..";

const AppLayout: React.FC = (): JSX.Element => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <Box flexGrow={1}>
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
