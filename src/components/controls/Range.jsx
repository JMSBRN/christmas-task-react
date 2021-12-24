import React from 'react'

const Range = () => {
	return (
		<div className="range">
		<div className="controls-title">Фильтры по диапазону</div>
		<div className="count">
			<span className="control-span">Количество экземпляров:</span> 
			<div className="count-slider-container">
				<output className="slider-output">1</output>
				<div className="count-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"><div className="noUi-base"><div className="noUi-connects"><div className="noUi-connect" ></div></div><div className="noUi-origin" ><div className="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1.0" aria-valuemax="12.0" aria-valuenow="1.0" aria-valuetext="1.00"><div className="noUi-touch-area"></div></div></div><div className="noUi-origin" ><div className="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1.0" aria-valuemax="12.0" aria-valuenow="12.0" aria-valuetext="12.00"><div className="noUi-touch-area"></div></div></div></div></div>
				<output className="slider-output">12</output>
			</div>          
		</div>
		<div className="year">
			<span className="control-span">Год приобретения:</span> 
			<div className="year-slider-container">
				<output className="slider-output">1940</output>
				<div className="year-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"><div className="noUi-base"><div className="noUi-connects"><div className="noUi-connect" ></div></div><div className="noUi-origin" ><div className="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1940.0" aria-valuemax="2020.0" aria-valuenow="1940.0" aria-valuetext="1940.00"><div className="noUi-touch-area"></div></div></div><div className="noUi-origin"><div className="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1940.0" aria-valuemax="2020.0" aria-valuenow="2020.0" aria-valuetext="2020.00"><div className="noUi-touch-area"></div></div></div></div></div>
				<output className="slider-output">2020</output>
			</div>          
		</div>
	</div>
	)
}

export default Range;
