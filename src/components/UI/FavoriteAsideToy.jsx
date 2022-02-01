import React from 'react';
import images  from  '../assets/toys/1.png'

const FavoriteAsideToy = ({toy,onDragStart, onDragEnd, style}) => {
	images= require(`../assets/toys/${toy.id}.png`);
	function dragHandlerStart(e) {
		onDragStart(e);
	}
	function dragHandlerEnd(e) {
		onDragEnd(e);
	}

	return (
	<div 
		key={toy.id} 
		className="favorites-card" 
		draggable="true"  
		data-num={toy.count}
		onDragStart={dragHandlerStart}
		onDragEnd={dragHandlerEnd}
	>
		<p className="favorites-count">{toy.count}</p>
		<img className="favorites-card-img"
		 src={images}
		 alt="toy" 
		 id={toy.id} 
		 data-imgnum={toy.data}
		 style={style}
		 />
	</div>
		
	);
};
export default FavoriteAsideToy;
