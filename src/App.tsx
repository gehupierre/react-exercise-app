import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Footer from "./components/footer";
import Nav from "./components/nav";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
