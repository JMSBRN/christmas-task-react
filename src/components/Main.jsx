import React, { useState } from 'react'
import Cards from './cards/Cards'
import Controls from './controls/Controls'


const Main = () => {

	const [choice, setChoice] = useState('')


	const shapeFromFilters = (choice) => {
		setChoice(choice)
	}


	return (
		<div className='main'>
		  <div className="blur">
				<Controls onClick={shapeFromFilters}/>
				<Cards  choice={choice}/>
			</div>
		</div>
	)
}

export default Main;
