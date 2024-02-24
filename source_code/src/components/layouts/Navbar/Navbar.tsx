import React from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Button, Box, Typography, IconButton, Toolbar, useTheme } from "@mui/material";
import FlexBetween from "../../../globalStyles/FlexBetween";
import { TNavbarProps } from "../../../@types/TNavbar.types";
import { DummyUserLogo } from "../../../assets";

const Navbar: React.FC<TNavbarProps> = ({ showSidebar, setShowSidebar }) => {
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setShowSidebar(!showSidebar)}>
            <MenuIcon />
          </IconButton>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <FlexBetween>
            <Button
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={DummyUserLogo}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography fontWeight="bold" fontSize="0.85rem" sx={{ color: theme.palette.secondary[100] }}>
                  Arkajit Roy
                </Typography>
                <Typography fontSize="0.75rem" sx={{ color: theme.palette.secondary[200] }}>
                  SDE (Frontend)
                </Typography>
              </Box>
            </Button>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
