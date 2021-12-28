import React from 'react'

const ButtonColors = (props) => {


	return (
		<button 
		onClick={props.onClick}
		value={props.value} 
		data-filter ={props.color}></button>
	)
}

export default ButtonColors
