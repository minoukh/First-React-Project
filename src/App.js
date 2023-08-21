import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Views/About";
import Home from "./Views/Home";
import ContactMe from "./Views/ContactMe";
import Product from "./Views/Product";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
