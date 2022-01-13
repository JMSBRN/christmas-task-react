import React, { useState} from 'react'
import Cards from './cards/Cards'
import Controls from './controls/Controls'
import {ContextFilters} from './ContextFilters'

const Main = () => {
	const [filters, setFilters] = useState({shape: [], color: [], size:[], favorite: []})
	const shapeFromFilters = (filters) => {
		setFilters(filters)	
	}
	const choiceFromButton = (value, form) => {
    const newArr = { ...filters };
    if (!filters[form].includes(value)) {
      newArr[form].push(value)
    } else {
      if (filters[form].includes(value)) {
        const index = newArr[form].indexOf(value);
        if (index !== -1) {
          newArr[form].splice(index, 1);
        }
      }
    }
    shapeFromFilters(newArr)
  }
	return (
		<div className='main'>
		  <div className="blur">
				<ContextFilters.Provider value={{...filters, choiceFromButton}}>
					<Controls/>
					<Cards/>
				</ContextFilters.Provider>
			</div>
		</div>
	)
}

export default Main;
