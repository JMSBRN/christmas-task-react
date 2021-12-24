import React from 'react'
import Range from '../UI/Range';

const Ranges = () => {
	return (
		<div className="range">
		<div className="controls-title">Фильтры по диапазону</div>
	 <Range 
	 name={"count"} 
	 title={"Количество экземпляров:"}
	 inputFirst={1} 
	 inputSecond={12}
	 dataHandle="0"
	 tabIndex="0"
	 role="slider"
	 ariaOrientation="horizontal"
	 ariaValuemin="1.0"
	 ariaValuemax="12.0"
	 ariaValuenow="1.0"
	 ariaValueText="1.00"/>

	 <Range 
	 name={"year"} 
	 title={"Фильтры по диапазону"} 
	 inputFirst={1940} 
	 inputSecond={2020}
	 dataHandle="0"
	 tabIndex="0"
	 role="slider"
	 ariaOrientation="horizontal"
	 ariaValuemin="1940.0"
	 ariaValuemax="2020.0"
	 ariaValuenow="1940.0"
	 ariaValueText="1940.00"/>
	 
	</div>
	)
}

export default Ranges;

<div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1.0" aria-valuemax="12.0" aria-valuenow="1.0" aria-valuetext="1.00"><div class="noUi-touch-area"></div></div>