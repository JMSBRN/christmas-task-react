import React from 'react'
import Filters from './Filters'
import Ranges from './Ranges'
import Sort from './Sort'

const Controls = ({onClick}) => {

const shapeFromFilters = (shape) => {
	onClick(shape)
}
const colorFromFilters = (color) => {
	onClick(color)
}

const sizeFromFilters = (size) => {
	onClick(size)
}


	return (
		<div className='controls'>
			<Filters onClick={shapeFromFilters, colorFromFilters, sizeFromFilters}/>
			<Ranges/>
			<Sort/>
		</div>
	)
}

export default Controls
