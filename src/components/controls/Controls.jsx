import React from 'react'
import Filters from './Filters'
import Ranges from './Ranges'
import Sort from './Sort'

const Controls = () => {
	return (
		<div className='controls'>
			<Filters/>
			<Ranges/>
			<Sort/>
		</div>
	)
}

export default Controls
