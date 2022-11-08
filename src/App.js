import React from 'react'

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Impressum from "./components/Impressum";



import { BrowserRouter as Router } from "react-router-dom";

import { HashRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
