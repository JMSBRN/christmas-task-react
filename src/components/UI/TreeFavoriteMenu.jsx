import React from 'react'
import BgTrees from '../UI/BgTrees'
import GarlandeTree from '../UI/GarlandeTree'
import Trees from '../UI/Trees'
import ShowAndAudio from '../UI/ShowAndAudio'

const TreeFavoriteMenu = () => {
	return (
		<div class="favorites-menu">
		<ShowAndAudio/>
		<Trees/>
		<BgTrees/>
		<GarlandeTree/>   
	</div>
	)
}

export default TreeFavoriteMenu
