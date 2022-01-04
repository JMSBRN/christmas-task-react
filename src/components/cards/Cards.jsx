import React, { useEffect, useState } from 'react'
import Card from './Card';
import dataAr from '../data'


const Cards = ({filters}) => {

const [data, setData] = useState(dataAr)

 const sortArr = data.filter(el => {
   
	  if(
			
			filters.shape.includes(el.shape) ||
			filters.color.includes(el.color) ||
			filters.size.includes(el.size) 
		
		){

			
			return data;
		}

 })

 console.log(filters);
  

	return (
		<div className='cards'>
			{sortArr.map(card =>
				<Card key = {card.num} card = {card}/>
				)}

		</div>
	)



}

export default Cards;
