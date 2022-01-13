import React, { useState} from 'react'
import Cards from './cards/Cards'
import Controls from './controls/Controls'
import {ContextFilters} from './ContextFilters'

const Main = () => {
	const [filters, setFilters] = useState({shape: [], color: [], size:[], favorite: []})
	const shapeFromFilters = (filters) => {
		setFilters(filters)	
	}
	return (
		<div className='main'>
		  <div className="blur">
				<ContextFilters.Provider value={filters}>
					<Controls onClick={shapeFromFilters}/>
					<Cards/>
				</ContextFilters.Provider>
			</div>
		</div>
	)
}

export default Main;
