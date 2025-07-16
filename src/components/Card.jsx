import React from "react";
import { Link } from "react-router-dom";
import "../styles/cards.css";

const Card = ({ id, image, name, title, excerpt }) => {
  return (
    <div className='card'>
      <img src={image} alt={name} className='card-image' />
      <div className='card-content'>
        <h3 className='card-name'>{name}</h3>
        <p className='card-title'>{title}</p>
        <p className='card-excerpt'>{excerpt}</p>
        <Link to={`/details/${id}`} className='card-button'>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
