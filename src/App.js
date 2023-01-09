import "./App.scss";
import { NavBarPc } from "./components/NavBarPc/NavBarPc";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Error } from "./components/Error/Error";
import { Curiosidades } from './pages/Curiosidades';
import { SobreNosotros } from './components/SobreNosotros/SobreNosotros';

function App() {
  return (
    <div id="app" className="background text">
      <div id="app-padding">
        <NavBarPc />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curiosidades" element={<Curiosidades />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="*" redirect={<Error />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
