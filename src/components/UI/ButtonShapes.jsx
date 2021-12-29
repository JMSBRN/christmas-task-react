import React, { useState } from 'react'

const ButtonShapes = ({onClick}) => {

	const shapesArr = ["шар", "колокольчик", "шишка", "снежинка","фигурка"]
	
	const [shapes] = useState(shapesArr)
	const [isActive, setActive] = useState("false");
	
  function getShape (e) {
    onClick(e.target.value);
    handleToggle();
  }

	function handleToggle  ()  {
		setActive(!isActive);  };

	return (

		<div className="shape">Форма:  
			{shapes.map(shape => 
					<button 
					className={isActive ? "active" : null} 
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
