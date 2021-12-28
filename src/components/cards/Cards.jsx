import React, { useState } from 'react'
import Card from './Card';
import data from '../data'


const Cards = ({choice}) => {


const sortedArray =  data.filter((el) => {
 
	if (

		el.shape.includes(choice) ||
		el.color.includes(choice) ||
		el.size.includes(choice)  
		
		) {

	return data;

	}

} );



	return (
		<div className='cards'>
			{sortedArray.map(card =>
				<Card key = {card.num} card = {card}/>
				)}
		</div>
	)
}

export default Cards;
