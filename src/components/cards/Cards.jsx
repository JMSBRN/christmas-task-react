import React, { useEffect, useState } from 'react'
import Card from './Card';
import dataAr from '../data'

const Cards = ({filters}) => {
const [data, setData] = useState(dataAr)

useEffect(()=> {  
	const sortArr = dataAr.filter(el => {
		if (
			 filters.shape.length === 0 &&
			 filters.color.length === 0 &&
			 filters.size.length === 0
			 ) {
			return data
		} else {
			if(
				filters.shape.includes(el.shape) ||
				filters.color.includes(el.color) ||
				filters.size.includes(el.size) 
			){	
				return dataAr;
			}
		} 
 })

  const newArr =  sortArr.filter(el => {

		if(
			el.shape.includes(filters.shape.join(', ')) &&
			el.color.includes(filters.color.join(', ')) && 
			el.size.includes(filters.size.join(', ')) 
			){

				console.log(filters.shape.join(', '));
				console.log(filters.color.join(', '));
				console.log(filters.size.join(', '));

			return true
		}
	 })

	 console.log(newArr);



 setData(newArr)
},[filters]);

	return (
		<div className='cards'>
			{data.map(card =>
				<Card key = {card.num} card = {card}/>
				)}

		</div>
	)
}

export default Cards;
