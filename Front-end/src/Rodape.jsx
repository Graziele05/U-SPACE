import React from 'react';
import './Rodape.css';

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="container">
        <div className="contato">
          <h4>Contato</h4>
          <p>Email: c@uspace.com</p>
          <p>Telefone: (75) 1234-5678</p>
          <p>Endereço: Rua Santa Terezinha, 113, Alagoinhas, BA</p>
        </div>
        <div className="links-rapidos">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Cardápio</a></li>
            <li><a href="/reservas">Reservas</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>
        <div className="redes-sociais">
          <h4>Siga-nos</h4>
          <a href="#"><img src="/Front-end/public/8.png" alt="Linkdin" /></a>
          <a href="#"><img src="/Front-end/public/7.png" alt="Instagram" /></a>
          <a href="#"><img src="/Front-end/public/6.png" alt="Facbook" /></a>
        </div>
      </div>
      <div className="creditos">
        <p>&copy; 2024 U SPACE. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Rodape;
