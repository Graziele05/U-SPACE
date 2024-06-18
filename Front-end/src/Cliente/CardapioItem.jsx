import React from 'react';

const CardapioItem = ({ name, description, price, image }) => (
  <div className="menu-item">
    <img src={image} alt={name} />
    <div className="cardapio-item-details">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  </div>
);

export default CardapioItem;
