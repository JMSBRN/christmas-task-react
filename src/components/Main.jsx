import React, { useState, useContext } from 'react'
import Cards from './cards/Cards'
import Controls from './controls/Controls'
import {Context} from './Context'

const Main = () => {
	const [filters, setFilters] = useState({shape: [], color: [], size:[], favorite: []})
	const shapeFromFilters = (filters) => {
		setFilters(filters)	
	}
	return (
		<div className='main'>
		  <div className="blur">
				<Context.Provider value={filters}>
					<Controls onClick={shapeFromFilters}/>
					<Cards/>
				</Context.Provider>
			</div>
		</div>
	)
}

export default Main;
