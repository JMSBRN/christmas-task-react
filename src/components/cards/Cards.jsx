import React, { useState } from 'react'
import Card from './Card';
import data from '../data'



// function sortedArr () {

// 	return data.sort((a, b) => a.color > b.color ? 1 : -1);
// }

// sortedArr()




const Cards = ({shape}) => {


const sortedArrayByShape =  data.filter((el) => {
 
	if (el.shape.includes(shape)) {

	return data;

	}

} );

    

	return (
		<div className='cards'>
			{sortedArrayByShape.map(card =>
				<Card key = {card.num} card = {card}/>
				)}
		</div>
	)
}

export default Cards;
