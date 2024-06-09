import "./Home.css"
import Topo from "./Topo";
import Rodape from "./Rodape";
import Menu from "./Menu";
function Home() {
  return (
    <>
      <div className="corpo">
        <Topo />
        <Menu />

        <Rodape />
      </div>
    </>
  );
}

export default Home;
