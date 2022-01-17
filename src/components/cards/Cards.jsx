import React, { useContext, useEffect, useState } from 'react'
import Card from './Card';
import dataAr from '../data'
import { ContextFilters } from '../ContextFilters';

const Cards = () => {
const [data, setData] = useState(dataAr)
const filters = useContext(ContextFilters)
useEffect(()=> {  
	const filteredtArr = dataAr.filter(el => (
		(filters.shape.includes(el.shape) || filters.shape.length === 0 ) &&
		(filters.color.includes(el.color) || filters.color.length === 0) &&
		(filters.size.includes(el.size) || filters.size.length === 0 ) &&
		(filters.favorite.includes(el.favorite) || filters.favorite.length === 0 ) &&
		(filters.valueCount[1] >= (parseInt(el.count))  && filters.valueCount[0] <= (parseInt(el.count))) &&
		(filters.valueYear[1] >= (parseInt(el.year))  && filters.valueYear[0] <= (parseInt(el.year))) 
	))

 setData(filteredtArr)
},[filters]);
	return (
		<div className='cards'>
			{data.map(card =>
				<Card  key={card.id} card={card}/>
				)}
		</div>
	)
}
export default Cards;
