import React, {useState} from 'react'

const ButtonFavorite = ({onChange}) => {
	const [checked, setCheked] = useState(false)


 function	handleCheck (e){
	onChange(e.target.checked);
	changeCheck();
	toggleActiveClass(e);
 }

 function changeCheck() {
	setCheked(checked)
 }

 function toggleActiveClass(e) {
	e.target.classList.toggle("active")
}

	return (
		<div className="favorite-container">Только любимые:
		<div className="form-group">
			<input checked ={checked}  onChange={handleCheck} type="checkbox" className="favorite-input" id="checkbox" />
			<label  htmlFor="checkbox" className="favorite-input-label"></label>
		</div>
	</div>
	)
}

export default ButtonFavorite
