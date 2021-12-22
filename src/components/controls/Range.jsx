import React from 'react'

const Range = () => {
	return (
		<div class="range">
		<div class="controls-title">Фильтры по диапазону</div>
		<div class="count">
			<span class="control-span">Количество экземпляров:</span> 
			<div class="count-slider-container">
				<output class="slider-output">1</output>
				<div class="count-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"><div class="noUi-base"><div class="noUi-connects"><div class="noUi-connect" ></div></div><div class="noUi-origin" ><div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1.0" aria-valuemax="12.0" aria-valuenow="1.0" aria-valuetext="1.00"><div class="noUi-touch-area"></div></div></div><div class="noUi-origin" ><div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1.0" aria-valuemax="12.0" aria-valuenow="12.0" aria-valuetext="12.00"><div class="noUi-touch-area"></div></div></div></div></div>
				<output class="slider-output">12</output>
			</div>          
		</div>
		<div class="year">
			<span class="control-span">Год приобретения:</span> 
			<div class="year-slider-container">
				<output class="slider-output">1940</output>
				<div class="year-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"><div class="noUi-base"><div class="noUi-connects"><div class="noUi-connect" ></div></div><div class="noUi-origin" ><div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1940.0" aria-valuemax="2020.0" aria-valuenow="1940.0" aria-valuetext="1940.00"><div class="noUi-touch-area"></div></div></div><div class="noUi-origin"><div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1940.0" aria-valuemax="2020.0" aria-valuenow="2020.0" aria-valuetext="2020.00"><div class="noUi-touch-area"></div></div></div></div></div>
				<output class="slider-output">2020</output>
			</div>          
		</div>
	</div>
	)
}

export default Range;
