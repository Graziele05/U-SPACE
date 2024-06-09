import React from 'react';

const Galeria = ({ cardapio }) => {
  return (
    <div className="galeria">
      {cardapio.map((item, index) => (
        <div key={index} className="item">
          <img src={item.imagem} alt={item.nome} />
          <div className="descricao">
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <p>Preço: R$ {item.preco}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Galeria;
