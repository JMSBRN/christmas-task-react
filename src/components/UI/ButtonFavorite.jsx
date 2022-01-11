import React from 'react'

const ButtonFavorite = ({onClick}) => {
 function	handleCheck (e){
	onClick(e.target.value)
 }
	return (
		<div className="favorite-container">Только любимые:
		<div className="form-group">
			<input value ={"да"} onClick={handleCheck} type="checkbox" className="favorite-input" id="checkbox" />
			<label  htmlFor="checkbox" className="favorite-input-label"></label>
		</div>
	</div>
	)
}

export default ButtonFavorite
