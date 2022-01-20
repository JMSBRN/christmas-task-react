import React,{useState} from 'react'

const TreeFavoriteAsideToys = () => {
	const [favoriteToys, setFavoriteToys] = useState([

		{id: "1-2",data:"1", count:"9"},
		{id: "2-2",data:"2", count:"4"},
		{id: "3-2",data:"3", count:"2"},
		{id: "4-2",data:"4", count:"12"},
		{id: "5-2",data:"5", count:"4"},
		{id: "6-2",data:"6", count:"2"},
		{id: "7-2",data:"7", count:"6"},
		{id: "8-2",data:"8", count:"8"},
		{id: "9-2",data:"9", count:"10"},
		{id: "10-2",data:"10", count:"2"},
	]);
	return (
		<div className="favorites-container">
			{
				favoriteToys.map(favoriteToy =>
					<div className="favorites-card" data-num={favoriteToy.date}>
					<p className="favorites-count">{favoriteToy.count}</p>
					<img className="favorites-card-img" src="assets/toys/1.png" alt="toy" id={favoriteToy.id} draggable="true" data-imgnum={favoriteToy.date} />
				</div>
					)
			}
		
		</div>
	)
}

export default TreeFavoriteAsideToys
