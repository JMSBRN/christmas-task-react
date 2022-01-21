import React,{useState} from 'react'
import FavoriteAsideToy from './FavoriteAsideToy';

const TreeFavoriteAsideToys = () => {

const [currentToy, setCurrentToy] = useState(null);

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



 function getStartValue(e){
	console.log("start", e.target.id);
 }

 function getLeaveValue(e){
	 console.log("leave",e.target.id);
 }
 function getEndValue(e){
   e.preventDefault();
	 console.log("end",e.target.id);
 }
 function getOverValue(e){
	e.preventDefault();
	console.log("over",e.target.id);
 }
 function getDropValue(e){

	 console.log("drop",e.target.id);
 }

	return (
		<div className="favorites-container">
		   { 
				FavoriteToys.map(toy =>
					<FavoriteAsideToy 
					 key={toy.id}
					 toy={toy}
					 onDragStart={getStartValue}
					 onDragLeave={getLeaveValue}
					 onDragEnd={getEndValue}
					 onDragOver={getOverValue}
					 onDrop={getDropValue}
					 />
					)
			 }
		</div>
	)
}

export default TreeFavoriteAsideToys
