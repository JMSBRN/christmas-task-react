import React from 'react'

const ButtonShapes = (props) => {

	


	return (

	  <button
		 onClick={props.onClick} 
		 value={props.shape} 
		 data-filter ={props.shape}
		 ></button>
	)
}

export default ButtonShapes
