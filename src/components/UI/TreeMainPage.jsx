import React, { useContext } from 'react'
import { ContextFilters } from '../ContextFilters';
import images from '../assets/tree/1.png'
import bgs from '../assets/bg/1.jpg'
import Garlande from './Garlande';

const TreeMainPage = () => {
	const { activeSnow, favoriteTrees, bgMainTrees, currentDragStartToy, currentDragEndtToy } = useContext(ContextFilters);
	const toggleSnow = (e) => {
		if (!e) {
			return "hide"
		}
	}
	bgs = require(`../assets/bg/${bgMainTrees}.jpg`)
	images = require(`../assets/tree/${favoriteTrees}.png`)

	setTimeout(()=>{
		const dragedDiv = document.querySelector('.draged-toys');
		function dragOver(e) {
			e.preventDefault();
			//console.log("over");
		}
		function dragEnter(e) {
			//console.log("enter");
		}
		function dragLeave(e) {
			//console.log("leave");
		}
		function dragDrop(e) {
			//console.log("drop");
			dragedDiv.append(currentDragStartToy)
		}
		dragedDiv.addEventListener('dragover', dragOver)
		dragedDiv.addEventListener('dragenter', dragEnter)
		dragedDiv.addEventListener('dragleave', dragLeave)
		dragedDiv.addEventListener('drop', dragDrop)
	},0)

	

	
	return (
	<div style={{backgroundImage:`url(${bgs})`, color: "grey"}} className="main-tree-container">
		<div className={`snowflakes ${toggleSnow(activeSnow)}`}>
			<div className="snowflakes"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
		</div>
		<div className='draged-toys'></div>
		<Garlande/>
      <img src={images} className="main-tree" useMap="#tree-map" alt="tree"/>
	</div>
	)
}
export default TreeMainPage

