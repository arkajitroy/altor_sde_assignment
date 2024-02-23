import React, { useMemo } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Error404Page, DashboardPage, AppLayout, ProductRecords } from "./components";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./globalStyles/theme";

const App: React.FC = () => {
  const theme = useMemo(() => createTheme(themeSettings("light")), ["light"]);

  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/product-records" element={<ProductRecords />} />
              <Route path="*" element={<Error404Page />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
};

export default App;
