import React from 'react'

const Range = (props) => {
	return (
		<div className={props.name}>
		<span className="control-span">{props.title}</span> 
		<div className="year-slider-container">
			<output className="slider-output">{props.inputFirst}</output>
			<div className="year-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"><div className="noUi-base"><div className="noUi-connects"><div className="noUi-connect" ></div></div><div className="noUi-origin" ><div className="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1940.0" aria-valuemax="2020.0" aria-valuenow="1940.0" aria-valuetext="1940.00"><div className="noUi-touch-area"></div></div></div><div className="noUi-origin"><div className="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1940.0" aria-valuemax="2020.0" aria-valuenow="2020.0" aria-valuetext="2020.00"><div className="noUi-touch-area"></div></div></div></div></div>
			<output className="slider-output">{props.inputSecond}</output>
		</div>          
	</div>
	)
}

export default Range
