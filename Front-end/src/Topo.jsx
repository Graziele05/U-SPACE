import './Topo.css';

const Topo = () => {
  return (
    <header className="topo">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="/Front-end/public/log2.png" alt="U SPACE" />
          </a>
        </div>
        <nav className="navegacao">
          <div className="nav-title">Navegação</div>
          <hr className="nav-line" />
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cardapio">Cardápio</a></li>
            <li><a href="/reservas">Reservas</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Topo;
