import React from 'react';
import './Topo.css';

const Topo = () => {
  return (
    <header className="topo">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="/Front-end/public/log2.png" alt="U SPACe" />
          </a>
        </div>
        <nav className="navegacao">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Cardápio</a></li>
            <li><a href="/reservas">Reservas</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav>
       
      </div>
    </header>
  );
}

export default Topo;
