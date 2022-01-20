import React from 'react'
import BgTrees from '../UI/BgTrees'
import TreeGarlande from '../UI/TreeGarlande'
import Trees from '../UI/Trees'
import ShowAndAudio from '../UI/ShowAndAudio'

const TreeFavoriteMenu = () => {
	return (
		<div className="favorites-menu">
		<ShowAndAudio/>
		<Trees/>
		<BgTrees/>
		<TreeGarlande/>   
	</div>
	)
}

export default TreeFavoriteMenu
