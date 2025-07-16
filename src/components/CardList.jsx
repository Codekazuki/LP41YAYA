import React from "react";
import Card from "./Card";
import "../styles/cardlist.css";
import teamData from "../teamData";

const CardList = () => {
  return (
    <div className='card-list'>
      {teamData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          image={card.image}
          name={card.name}
          title={card.title}
          excerpt={card.excerpt}
        />
      ))}
    </div>
  );
};

export default CardList;
