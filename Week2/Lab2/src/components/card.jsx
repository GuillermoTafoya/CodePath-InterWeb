import React from "react";
import './card.css';

const Card = (props) => {
  return (
    <div className="card-list ">
      <p>{props.title}</p>
      <p>{props.clicks}</p>
      <button className="card-footer">{props.numberPizzas}</button>
    </div>
      
  )
}

export default Card;