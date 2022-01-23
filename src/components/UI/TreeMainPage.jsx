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
		const dragedDiv = document.querySelector('.tree-map');
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
			//console.log("screenY",e);
			
		
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
		
		<Garlande/>
		<img src={images} className="main-tree" useMap="#tree-map" alt="tree"/>
		<map id='tree-map' className='tree-map' name="tree-map">
          <area  shape="poly" coords="365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664"/>
        </map>
      
	</div>
	)
}
export default TreeMainPage

