import React from 'react'

const ButtonShapes = (props) => {



	return (

	  <button
		 className={props.className}
		 onClick={props.onClick} 
		 value={props.shape} 
		 data-filter ={props.shape}
		 ></button>
	)
}

export default ButtonShapes
