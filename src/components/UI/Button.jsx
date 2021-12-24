import React from 'react'

const Button = (props) => {
	return (
		<button className={`${props.clasName}`}>{props.txt}</button>
	)
}

export default Button
