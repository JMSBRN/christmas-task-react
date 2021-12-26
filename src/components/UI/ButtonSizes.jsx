import React from 'react'

const ButtonSizes = (props) => {


	function setSize(){

		console.log(props.size);

		
	}
	return (
		<button onClick={setSize} data-filter ={props.size}></button>
	)
}

export default ButtonSizes
