import React, { useContext, useEffect, useState } from 'react'
import Card from './Card';
import dataAr from '../data'
import { Context } from '../Context';

const Cards = () => {
const [data, setData] = useState(dataAr)

const filters = useContext(Context)
useEffect(()=> {  
	const sortArr = dataAr.filter(el => (
		(filters.shape.includes(el.shape) || filters.shape.length === 0 ) &&
		(filters.color.includes(el.color) || filters.color.length === 0) &&
		(filters.size.includes(el.size) || filters.size.length === 0 ) &&
		(filters.favorite.includes(el.favorite) || filters.favorite.length === 0 )
	))

 setData(sortArr)
},[filters]);

	return (
		<div className='cards'>
			{data.map(card =>
				<Card  key={card.num} card={card}/>
				)}
		</div>
	)
}

export default Cards;
