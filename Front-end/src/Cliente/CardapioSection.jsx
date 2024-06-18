import React from 'react';

const CardapioSection = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardapioSection;
