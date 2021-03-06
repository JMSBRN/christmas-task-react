import React, { useState } from 'react'

const ButtonShapes = ({ onClick }) => {
	const shapesArr = ["шар", "колокольчик", "шишка", "снежинка", "фигурка"]
	const [shapes] = useState(shapesArr)

	function getShape(e) {
		onClick(e.target.value);
		toggleActiveClass(e);
	}

	function toggleActiveClass(e) {
		e.target.classList.toggle("active");
	}

	return (
		<div className="shape">Форма:
			{shapes.map(shape =>
				<button
					onClick={getShape}
					key={shape}
					value={shape}
				/>
			)}
		</div>
	)
}

export default ButtonShapes

