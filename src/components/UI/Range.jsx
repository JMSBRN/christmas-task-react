import React from 'react'

const Range = (props) => {
const getValue = (e) => {
console.log(e.target.value);
}
	return (
		<div className='slider-container'>
			<output className="slider-output">{props.min}</output>
			    <input onChange={getValue} className='slider' type="range" min={props.min} max={props.max} ></input>
			<output className="slider-output">{props.max}</output>		
		</div>
	)
}
export default Range

