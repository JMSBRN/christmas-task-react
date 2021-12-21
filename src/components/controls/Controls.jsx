import React from 'react'
import Filter from './Filter'
import Range from './Range'
import Sort from './Sort'

const Controls = () => {
	return (
		<div className='controls'>
			<Filter></Filter>
			<Range></Range>
			<Sort></Sort>
		</div>
	)
}

export default Controls
