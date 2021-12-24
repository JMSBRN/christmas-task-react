import React from 'react'
import Range from '../UI/Range';

const Ranges = () => {
	return (
		<div className="range">
		<div className="controls-title">Фильтры по диапазону</div>
	 <Range name={"year"} title={"Количество экземпляров:"} inputFirst={1} inputSecond={12}/>
	 <Range name={"year"} title={"Фильтры по диапазону"} inputFirst={1940} inputSecond={2020}/>
	</div>
	)
}

export default Ranges;
