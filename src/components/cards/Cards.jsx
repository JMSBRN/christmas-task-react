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

	function sortArrByConditions(arr,func){
    arr.sort((a, b) => func(a, b)? 1: func(b, a)? -1: 0)
		return arr;
 }

 if(filters.selectedSort === "1"){
	 sortArrByConditions(filteredtArr,(a,b) => a.name > b.name)
 } else if(filters.selectedSort === "2"){
 	 sortArrByConditions(filteredtArr,(a,b) => a.name < b.name)
} else if(filters.selectedSort === "3"){
	 sortArrByConditions(filteredtArr,(a,b) => parseInt(a.count) > parseInt(b.count))
 } else if (filters.selectedSort === "4"){
	 sortArrByConditions(filteredtArr,(a,b) => parseInt(a.count) < parseInt(b.count))
 }

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
