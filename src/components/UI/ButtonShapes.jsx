import React, { useState } from 'react'

const ButtonShapes = ({onClick}) => {

	const shapesArr = ["шар", "колокольчик", "шишка", "снежинка","фигурка"]
	
	const [shapes] = useState(shapesArr)
	
	
  function getShape (e) {
    onClick(e.target.value);
    toggleActiveClass(e);
  }


		function toggleActiveClass (e){
  	 e.target.classList.toggle("active");
		}

	return (

		<div className="shape">Форма:  
			{shapes.map(shape => 
					<button
					onClick={getShape} 
					key = {shape} 
					value = {shape} 
					shape={shape}/>
				)}
	  </div>
	)
}

export default ButtonShapes



 // <button
		//  className={props.className}
		//  onClick={props.onClick} 
		//  value={props.shape} 
		//  data-filter ={props.shape}
		//  ></button>
