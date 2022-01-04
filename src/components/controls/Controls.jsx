import React from 'react'
import Filters from './Filters'
import Ranges from './Ranges'
import Sort from './Sort'

const Controls = ({onClick}) => {

const choiceFromFilters = (filters) => {
	onClick(filters)
	

	
}


	return (
		<div className='controls'>
			<Filters onClick={choiceFromFilters}/>
			<Ranges/>
			<Sort/>
		</div>
	)
}

export default Controls
