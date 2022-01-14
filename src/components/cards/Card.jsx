import React from 'react'
import images from '../assets/toys/1.png'

const Card = ({card}) => {
 images = require(`../assets/toys/${card.id}.png`);
 function returnDA (){
  if(card.favorite === true){
    return "да"
  }else {
    return "нет"
  }
 }
 function toggleClassActive(e){
   e.target.classList.toggle("active");
 }


	return (
		<div onClick={toggleClassActive} className="card " data-id={card.id}>  
    <h2 className="card-title">{card.name}</h2>
    <img className="card-img" src={images} alt="toy"/>
    <div className="card-description">      
      <p className="count">Количество:<span>{card.count}</span></p>
      <p className="year">Год покупки:<span>{card.year}</span></p>
      <p className="shape">Форма:<span>{card.shape}</span></p>
      <p className="color">Цвет:<span>{card.color}</span></p>
      <p className="size">Размер:<span>{card.size}</span></p>
      <p className="favorite">Любимая:<span>{returnDA()}</span></p>
    </div>
    <div className="ribbon"></div>
  </div>
	)
}

export default Card;