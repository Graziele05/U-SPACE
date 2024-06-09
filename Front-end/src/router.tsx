import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cardapio from './Cardapio';
import FormularioIntegrado from './FormularioIntegrado';

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/formulariointegrado" element={<FormularioIntegrado/>} />
      </Routes>
    </Router>
  );
} 

export default MainRoutes;
