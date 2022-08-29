import { Routes, Route } from "react-router-dom";

import AppProvider from "./state/provider";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Home from "./pages/Home";
import Modal from "./components/modal";

function App() {
  return (
    <AppProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <Modal />
    </AppProvider>
  );
}

export default App;
