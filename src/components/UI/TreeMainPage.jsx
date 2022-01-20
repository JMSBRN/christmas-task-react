import React, { useContext } from 'react'
import { ContextFilters } from '../ContextFilters';
import images from '../assets/tree/1.png'

const TreeMainPage = () => {
	const { activeSnow, FavoriteTrees } = useContext(ContextFilters);
	const toggleSnow = (e) => {
		if (!e) {
			return "hide"
		}
	}
	images = require(`../assets/tree/${FavoriteTrees}.png`)
	return (
	<div className="main-tree-container">
		<div className={`snowflakes ${toggleSnow(activeSnow)}`}>
			<div className="snowflakes"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
		</div>
		<div className="garland-tree-container"></div>
      <img src={images} className="main-tree" useMap="#tree-map" alt="tree"/>
	</div>
	)
}
export default TreeMainPage
