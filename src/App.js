import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import About from "./component/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <About />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
