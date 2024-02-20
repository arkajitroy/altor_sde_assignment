import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Error404Page, Footer, HomePage, Navbar, Sidebar } from "./components";

const App: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  return (
    <div className="app">
      <Sidebar showSidebar={showSidebar} />
      <Router>
        <Navbar setShowSidebar={setShowSidebar} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
