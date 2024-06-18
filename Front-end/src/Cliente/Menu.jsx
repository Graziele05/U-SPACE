import React from 'react';
import CardapioSection from './CardapioSection';

const Menu = ({ cardapio }) => (
  <div className="cardapio">
    {cardapio.map((section, index) => (
      <CardapioSection key={index} {...section} />
    ))}
  </div>
);

export default Menu;
