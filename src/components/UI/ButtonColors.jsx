import React from 'react'

const ButtonColors = (props) => {

	function setColor(){

		console.log(props.color);

		
	}
	return (
		<button onClick={setColor} data-filter ={props.color}></button>
	)
}

export default ButtonColors
