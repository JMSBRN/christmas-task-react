import React, { useState } from 'react'
import Card from './Card';
import data from '../data'



const Cards = () => {

	const [cards, setcards] = useState(data);

	return (
		<div className='cards'>
			{cards.map(card =>
				<Card card = {card}/>
				)}
		</div>
	)
}

export default Cards;
