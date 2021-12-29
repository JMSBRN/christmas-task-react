import React from 'react'

const ButtonSizes = (props) => {


	return (
		<button 
		onClick={props.onClick}
		value={props.size}
		data-filter ={props.size} 
		>
		</button>
	)
}

export default ButtonSizes
