import React from "react";
import images from '../assets/toys/1.png'

const Card = (props) => {

 images = require(`../assets/toys/${props.card.num}.png`);

	return (
		 
		<div className="card" data-num={props.card.num}>  
    <h2 className="card-title">{props.card.name}</h2>
    <img className="card-img" src={images} alt="toy"/>
    <div className="card-description">      
      <p className="count">Количество:<span>{props.card.count}</span></p>
      <p className="year">Год покупки:<span>{props.card.year}</span></p>
      <p className="shape">Форма:<span>{props.card.shape}</span></p>
      <p className="color">Цвет:<span>{props.card.color}</span></p>
      <p className="size">Размер:<span>{props.card.size}</span></p>
      <p className="favorite">Любимая:<span>{props.card.favorite}</span></p>
    </div>
    <div className="ribbon"></div>
  </div>
	)
}

export default Card;