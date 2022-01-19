import React from 'react'
import TreeFavoriteAside from '../UI/TreeFavoriteAside'
import TreeFavoriteMenu from '../UI/TreeFavoriteMenu'
import TreeMainPage from '../UI/TreeMainPage'
const Tree = () => {
	return (
		<div class="page favorites-page" data-page="favoritesPage">
			<div class="blur">
				<div class="page-container">
          <TreeFavoriteMenu/>
          <TreeMainPage/>
          <TreeFavoriteAside/>
				</div>
			</div>
		</div>
	)
}

export default Tree
