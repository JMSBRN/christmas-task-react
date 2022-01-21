import React from 'react'
import BgTrees from '../UI/BgTrees'
import GarlandeButtons from './GarlandeButtons'
import Trees from '../UI/Trees'
import ShowAndAudio from '../UI/ShowAndAudio'

const TreeFavoriteMenu = () => {
	return (
		<div className="favorites-menu">
		<ShowAndAudio/>
		<Trees/>
		<BgTrees/>
		<GarlandeButtons/>   
	</div>
	)
}

export default TreeFavoriteMenu
