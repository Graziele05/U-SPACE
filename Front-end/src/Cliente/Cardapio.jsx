import React from 'react';
import MenuSection from './CardapioSection';
import './Cardapio.css';

const Cardapio = () => {
  const menu = [
    {
      title: 'Entradas',
      items: [
        {
          name: 'Salada Caprese',
          description: 'Tomate, mussarela de búfala, manjericão, azeite e vinagre balsâmico',
          price: 'R$ 18,90',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Bruschetta',
          description: 'Pão italiano, tomate, manjericão, alho e azeite',
          price: 'R$ 15,90',
          image: 'https://via.placeholder.com/150',
        },
      ],
    },
    {
      title: 'Pratos Principais',
      items: [
        {
          name: 'Spaghetti à Carbonara',
          description: 'Massa italiana, ovos, queijo parmesão, pancetta e pimenta do reino',
          price: 'R$ 32,90',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Risoto de Funghi',
          description: 'Arroz arbóreo, cogumelos frescos, vinho branco e queijo parmesão',
          price: 'R$ 38,90',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Filet Mignon ao Molho Madeira',
          description: 'Filé mignon grelhado, molho madeira, batatas sauté e legumes',
          price: 'R$ 45,90',
          image: 'https://via.placeholder.com/150',
        },
      ],
    },
    {
      title: 'Sobremesas',
      items: [
        {
          name: 'Tiramisù',
          description: 'Biscoitos champanhe, café, mascarpone, cacau e rum',
          price: 'R$ 22,90',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Panna Cotta',
          description: 'Creme de leite, açúcar, gelatina e calda de frutas vermelhas',
          price: 'R$ 18,90',
          image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Entradas',
            items: [
              {
                name: 'Salada de Quinoa',
                description: 'Quinoa, tomate cereja, pepino, cebola roxa, salsinha e limão',
                price: 'R$ 22,90',
                image: 'https://via.placeholder.com/150',
              },
              {
                name: 'Carpaccio',
                description: 'Filé mignon fatiado, alcaparras, queijo parmesão e molho mostarda',
                price: 'R$ 27,90',
                image: 'https://via.placeholder.com/150',
              },
              {
                name: 'Caldo Verde',
                description: 'Caldo de batata, couve, linguiça calabresa e azeite',
                price: 'R$ 17,90',
                image: 'https://via.placeholder.com/150',
              },
            ],
          },
          {
            title: 'Pratos Principais',
            items: [
              {
                name: 'Paella Valenciana',
                description: 'Arroz, frango, porco, camarão, vôngoles, pimentão, açafrão e ervilhas',
                price: 'R$ 55,90',
                image: 'https://via.placeholder.com/150',
              },
              {
                name: 'Moqueca de Peixe',
                description: 'Peixe, camarão, pimentão, tomate, leite de coco, azeite de dendê e coentro',
                price: 'R$ 42,90',
                image: 'https://via.placeholder.com/150',
              },
              {
                name: 'Nhoque ao Sugo',
                description: 'Nhoque de batata, molho de tomate e manjericão',
                price: 'R$ 28,90',
                image: 'https://via.placeholder.com/150',
              },
            ],
          },
          {
            title: 'Sobremesas',
            items: [
              {
                name: 'Mousse de Chocolate',
                description: 'Chocolate meio amargo, creme de leite, açúcar e ovos',
                price: 'R$ 19,90',
                image: 'https://via.placeholder.com/150',
              },
              {
                name: 'Cheesecake de Frutas Vermelhas',
                description: 'Cream cheese, açúcar, ovos, baunilha e geleia de frutas vermelhas',
                price: 'R$ 24,90',
                image: 'https://via.placeholder.com/150',
              },
              {
                name: 'Creme Brûlée',
                description: 'Creme de leite, gemas, açúcar e baunilha, com crosta caramelizada',
                price: 'R$ 21,90',
                image: 'https://via.placeholder.com/150',
              },
            ],
          },
          
      ],
    },
  ];

  return (
    <div className="cardapio">
      {menu.map((section, index) => (
        <MenuSection key={index} {...section} />
      ))}
    </div>
  );
};

export default Cardapio;
