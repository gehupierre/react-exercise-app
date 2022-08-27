import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import AppProvider from "./state/provider";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Home from "./pages/Home";

function App() {
  return (
    <AppProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </AppProvider>
  );
}

export default App;
