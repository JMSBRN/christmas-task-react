import React, { useState } from 'react'

const ButtonColors = ({ onClick }) => {

	const colorsArr = ["белый", "желтый", "красный", "синий", "зелёный"]
	const [colors] = useState(colorsArr)

	function getColor(e) {
		onClick(e.target.value);
		toggleActiveClass(e);
	}

	function toggleActiveClass(e) {
		e.target.classList.toggle("active");
	}

	return (
		<div className="color">Цвет:
			{colors.map(color =>
				<button
					onClick={getColor}
					value={color}
					key={color}
				/>
			)}
		</div>
	)
}

export default ButtonColors
