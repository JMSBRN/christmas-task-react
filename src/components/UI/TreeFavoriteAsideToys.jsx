import React,{useContext} from 'react'
import FavoriteAsideToy from './FavoriteAsideToy';
import { ContextFilters } from '../ContextFilters';

const TreeFavoriteAsideToys = () => {

	const {getDragStartValue, getDragEndValue, getStyle} = useContext(ContextFilters);

 const FavoriteToys = [
   {id: "1", data: "1", count: "1",},
   {id: "2", data: "1", count: "1",},
   {id: "3", data: "1", count: "1",},
   {id: "4", data: "1", count: "1",},
   {id: "5", data: "1", count: "1",},
   {id: "7", data: "1", count: "1",},
   {id: "8", data: "1", count: "1",},
   {id: "9", data: "1", count: "1",},
   {id: "10", data: "1", count: "1",},
   {id: "11", data: "1", count: "1",},
   {id: "12", data: "1", count: "1",},
   {id: "13", data: "1", count: "1",},
   {id: "14", data: "1", count: "1",},
   {id: "15", data: "1", count: "1",},
   {id: "16", data: "1", count: "1",},
   {id: "17", data: "1", count: "1",},
   {id: "18", data: "1", count: "1",},
   {id: "19", data: "1", count: "1",},
   {id: "20", data: "1", count: "1",}
 ];


	return (
		<div className="favorites-container">
		   { 
				FavoriteToys.map(toy =>
					<FavoriteAsideToy 
					 key={toy.id}
					 toy={toy}
					  onDragStart={getDragStartValue}
					  onDragEnd={getDragEndValue}
            style={{getStyle}}
					 />
					)
			 }
		</div>
	)
}

export default TreeFavoriteAsideToys
