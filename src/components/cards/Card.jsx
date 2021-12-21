import {React} from "react";
import imageBall from '../assets/toys/1.png'


const Card = () => {
	return (
		 
		<div className="card" data-num="">  
    <h2 className="card-title">Красный матовый шар</h2>
    <img className="card-img" src= {imageBall} alt="toy"/>
    <div className="card-description">      
      <p className="count">Количество:<span>3</span></p>
      <p className="year">Год покупки:<span>1990</span></p>
      <p className="shape">Форма:<span>шар</span></p>
      <p className="color">Цвет:<span>красный</span></p>
      <p className="size">Размер:<span>большой</span></p>
      <p className="favorite">Любимая:<span>нет</span></p>
    </div>
    <div className="ribbon"></div>
  </div>
	)
}

export default Card;