
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/contato">
        <img src="imagem1.jpg" alt="Rota 1" />
      </Link>
      <Link to="/reservas">
        <img src="imagem2.jpg" alt="Rota 2" />
      </Link>
      <Link to="/menu">
        <img src="imagem3.jpg" alt="Rota 3" />
      </Link>
    </div>
  );
}

export default Menu;
