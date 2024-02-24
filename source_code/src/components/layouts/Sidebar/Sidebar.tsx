import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { ChevronLeft, ChevronRightOutlined, HomeOutlined, ReceiptLongOutlined } from "@mui/icons-material";

import FlexBetween from "../../../globalStyles/FlexBetween";
import { TSidebarProps } from "../../../@types/TSidebar.types";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
    routes: "/",
  },
  {
    text: "Data Records",
    icon: <ReceiptLongOutlined />,
    routes: "/product-records",
  },
];

const Sidebar: React.FC<TSidebarProps> = ({ showSidebar, setShowSidebar, drawerWidth, isNonMobile }): JSX.Element => {
  const [active, setActive] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {showSidebar && (
        <Drawer
          open={showSidebar}
          onClose={() => setShowSidebar(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    DataVisioX
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setShowSidebar(!showSidebar)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon, routes }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(routes);
                        setActive(routes);
                      }}
                      sx={{
                        backgroundColor: active === routes ? theme.palette.secondary[300] : "transparent",
                        color: active === routes ? theme.palette.primary[600] : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color: active === routes ? theme.palette.primary[600] : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === routes && <ChevronRightOutlined sx={{ ml: "auto" }} />}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
