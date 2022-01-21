import React from 'react';
import images  from  '../assets/toys/1.png'

const FavoriteAsideToy = ({toy,onDragStart, onDragLeave, onDragEnd, onDragOver, onDrop}) => {
	images= require(`../assets/toys/${toy.id}.png`);
	function dragHandlerStart(e) {
		onDragStart(e);
	}
	function dragHandlerLeave(e) {
		onDragLeave(e);
	}
	function dragHandlerEnd(e) {
		onDragEnd(e);
	}
	function dragHandlerOver(e) {
		onDragOver(e);
	}
	function dragHandDrop(e) {
		onDrop(e);
	}
	return (
	<div 
		key={toy.id} 
		className="favorites-card" 
		draggable="true"  
		data-num={toy.count}
		onDragStart={dragHandlerStart}
		onDragLeave={dragHandlerLeave}
		onDragEnd={dragHandlerEnd}
		onDragOver={dragHandlerOver}
		onDrop={dragHandDrop}
	>
		<p className="favorites-count">{toy.count}</p>
		<img className="favorites-card-img"
		 src={images}
		 alt="toy" 
		 id={toy.id} 
		 data-imgnum={toy.data}
		 />
	</div>
		
	);
};
export default FavoriteAsideToy;
