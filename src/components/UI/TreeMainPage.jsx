import React, { useContext } from 'react'
import { ContextFilters } from '../ContextFilters';
import images from '../assets/tree/1.png'
import bgs from '../assets/bg/1.jpg'

const TreeMainPage = () => {
	const { activeSnow, favoriteTrees, bgMainTrees } = useContext(ContextFilters);
	const toggleSnow = (e) => {
		if (!e) {
			return "hide"
		}
	}
	bgs = require(`../assets/bg/${bgMainTrees}.jpg`)
	images = require(`../assets/tree/${favoriteTrees}.png`)
	
	return (
	<div style={{backgroundImage:`url(${bgs})`}} className="main-tree-container">
		<div className={`snowflakes ${toggleSnow(activeSnow)}`}>
			<div className="snowflakes"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
		</div>
		<div className="garland-tree-container"></div>
      <img src={images} className="main-tree" useMap="#tree-map" alt="tree"/>
	</div>
	)
}
export default TreeMainPage

