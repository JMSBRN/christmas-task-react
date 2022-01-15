
import React, { useState } from 'react'
import Range from '../UI/Range'

const Ranges = () => {

	return (
	<div className="range">
		<div className="controls-title">Фильтры по диапазону</div>
			<div>Количество экземпляров:</div>
			<div className="count-slider-container">
				<output className='slider-output'>1</output>
								<Range/>
					<output className='slider-output'>12</output>
			</div>
			<div>Год приобретения:</div>
			<div className="year-slider-container">
				<output className='slider-output'>1940</output>
					<Range/>
				<output className='slider-output'>2020</output>
			</div>
	</div>
	)
}
export default Ranges;

