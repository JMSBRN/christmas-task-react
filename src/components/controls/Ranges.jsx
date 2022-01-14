
import React from 'react'
import Range from '../UI/Range';

const Ranges = () => {
	return (
	<div className="range">
		<div className="controls-title">Фильтры по диапазону</div>
			<div>Количество экземпляров:</div>
			<Range min= "1" max="12"/>
			<div>Год приобретения:</div>
			<Range  min= "1940" max="2020"/>
	</div>
	)
}
export default Ranges;

