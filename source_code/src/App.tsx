import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Error404Page, Footer, DashboardPage, Navbar, Sidebar, AppLayout } from "./components";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./globalStyles/theme";

const App: React.FC = () => {
  const theme = useMemo(() => createTheme(themeSettings("dark")), ["dark"]);

  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="*" element={<Error404Page />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
};

export default App;
