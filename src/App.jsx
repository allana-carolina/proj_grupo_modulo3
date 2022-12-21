import { useState } from "react";

import BasicExample from "./componentes/menu";
import GroupExample from "./componentes/card";
import MudaPreco from "./componentes/mudapreco";
import Footer from "./componentes/rodape";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import Servicos from "./pages/servicos";
import Localizacao from "./pages/localizacao";
import Agendar from "./pages/agendar";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import HomePage from "./componentes/home";
import Pigmentacao from './pages/pigmento'

function App() {
  return (
    <div className="container">
      <header>
        <BasicExample />
        <HomePage />
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/servicos" element={<Servicos />}></Route>
        <Route path="/localizacao" element={<Localizacao />}></Route>
        <Route path="/agendar" element={<Agendar />}></Route>
        <Route path="/pigmentacao" element={<Pigmentacao />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
