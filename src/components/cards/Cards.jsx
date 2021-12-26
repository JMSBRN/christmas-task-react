import React, { useState } from 'react'
import Card from './Card';
import data from '../data'



// function sortedArr () {

// 	return data.sort((a, b) => a.color > b.color ? 1 : -1);
// }

// sortedArr()



const sortedArrayByShape =  data.filter((el) => {

	if (el.shape.includes('шар')) {

		return data;

	}

} );

const Cards = () => {

	const [cards, setcards] = useState(sortedArrayByShape);

	return (
		<div className='cards'>
			{cards.map(card =>
				<Card key = {card.num} card = {card}/>
				)}
		</div>
	)
}

export default Cards;
