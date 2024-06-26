import './Topo.css';
import { Link } from 'react-router-dom';

const Topo = () => {
  return (
    <header className="topo">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/Front-end/public/log2.png" alt="U SPACE" />
          </Link>
        </div>
        <nav className="navegacao">
          <div className="nav-title">Navegação</div>
          <hr className="nav-line" />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Cliente/Cardapio">Cardápio</Link></li>
            <li><Link to="/Cliente/Reservac">Reservar</Link></li>
          
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Topo;
