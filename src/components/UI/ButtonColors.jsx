import React, { useState } from 'react'

const ButtonColors = ({onClick}) => {

	const colorsArr = ["белый","желтый", "красный","синий","зелёный"]
	const [colors] = useState(colorsArr)

	function getColor (e) { 
    onClick(e.target.value);
    }

	return (
		<div className="color">Цвет:   
		{colors.map(color => 
			 <button onClick={getColor} value={color} key = {color} color={color}/>
			)}
	</div>
	)
}

export default ButtonColors
