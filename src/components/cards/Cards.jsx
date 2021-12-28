import React, { useState } from 'react'
import Card from './Card';
import data from '../data'


const Cards = ({shape, color, size}) => {


const sortedArrayByShape =  data.filter((el) => {
 
	if (el.shape.includes(shape)) {

	return data;

	}

} );

 const sortedArrayByColor =  sortedArrayByShape.filter((el) => {

	if (el.color.includes(color)){
		return data
	}
 })

 const sortedArrayBySize = sortedArrayByColor.filter((el) => {

	if (el.size.includes(size)){
		return data
	}
 })

 console.log(sortedArrayBySize);

	return (
		<div className='cards'>
			{sortedArrayBySize.map(card =>
				<Card key = {card.num} card = {card}/>
				)}
		</div>
	)
}

export default Cards;
