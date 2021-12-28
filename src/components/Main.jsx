import React, { useState } from 'react'
import Cards from './cards/Cards'
import Controls from './controls/Controls'


const Main = () => {

	const [shape, setShape] = useState('')

	const shapeFromFilters = (shape) => {

		setShape(shape)
	}


	return (
		<div className='main'>
		  <div className="blur">
				<Controls onClick={shapeFromFilters}/>
				<Cards shape={shape}/>
			</div>
		</div>
	)
}

export default Main;
