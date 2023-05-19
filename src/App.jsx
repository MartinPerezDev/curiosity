import React from "react";

import { Home } from "./pages/Home";
import { Curiosities } from './pages/Curiosities';
import About from "./pages/About";
import { Footer } from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Error } from "./components/Error/Error";
import { Contacto } from './components/Contacto/Contacto';
import { NavBarResponsive } from "./components/NavBarResponsive/NavBarResponsive";

import "./App.scss";

function App() {

  return (
    <div id="app" className="background text">
      <div id="app-padding">
        <NavBarResponsive />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curiosidades" element={<Curiosities />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" redirect={<Error />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
