import React from 'react'
import Filters from './Filters'
import Ranges from './Ranges'
import Sort from './Sort'

const Controls = ({onClick}) => {

	const shapeFromFilters = (shape) => {

		onClick(shape)
	}

	return (
		<div className='controls'>
			<Filters onClick={shapeFromFilters}/>
			<Ranges/>
			<Sort/>
		</div>
	)
}

export default Controls
