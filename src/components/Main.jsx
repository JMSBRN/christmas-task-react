import React, { useState } from 'react'
import Cards from './cards/Cards'
import Controls from './controls/Controls'

const Main = () => {
	const [filters, setFilters] = useState({shape: [], color: [], size:[], favorite: []})
	const shapeFromFilters = (filters) => {
		setFilters(filters)	
	}
console.log(filters);
	return (
		<div className='main'>
		  <div className="blur">
				<Controls filters={filters} onClick={shapeFromFilters}/>
				<Cards  filters={filters}/>
			</div>
		</div>
	)
}

export default Main;
