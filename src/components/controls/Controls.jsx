import React from 'react'
import Filters from './Filters'
import Range from './Range'
import Sort from './Sort'

const Controls = () => {
	return (
		<div className='controls'>
			<Filters/>
			<Range/>
			<Sort/>
		</div>
	)
}

export default Controls
