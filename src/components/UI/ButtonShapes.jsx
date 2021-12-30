import React, { useState } from 'react'

const ButtonShapes = ({onClick}) => {

	const shapesArr = ["шар", "колокольчик", "шишка", "снежинка","фигурка"]
	
	const [shapes] = useState(shapesArr)
	const [isActive, setActive] = useState("false");
	
  function getShape (e) {
    onClick(e.target.value);
    setActiveClass(e);
  }


		function setActiveClass (e){
      if (setActive(!isActive)) {

				
			}
			e.target.className = isActive ? "active": null;

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
