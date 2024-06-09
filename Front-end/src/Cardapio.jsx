import React from 'react';
import Galeria from './Galeria';
import Topo from './Topo';
import Rodape from './Rodape';
import './Galria.css';


const Cardapio = () => {
  const cardapio = [
    {
      nome: 'Pizza',
      descricao: 'Descrição do item 1',
      preco: '10.00',
      imagem: 'imagem1.jpg'
    },
    {
      nome: 'X-burgur',
      descricao: 'Descrição do item 2',
      preco: '15.00',
      imagem: 'caminho/para/imagem2.jpg'
    },
    {
      nome: 'Jantar',
      descricao: 'Descrição do item 3',
      preco: '12.00',
      imagem: 'imagem3.jpg'
    }
  ];

  return (
    <div>
      <Topo/>
      <h2>Cardápio</h2>
      <Galeria cardapio={cardapio} />
      <Rodape/>
    </div>
  );
}

export default Cardapio;


