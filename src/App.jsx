import React from "react";

import { Home } from "./pages/Home";
import { Curiosidades } from './pages/Curiosidades';
import { Footer } from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Error } from "./components/Error/Error";
import { SobreNosotros } from './components/SobreNosotros/SobreNosotros';
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
          <Route path="/curiosidades" element={<Curiosidades />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" redirect={<Error />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
