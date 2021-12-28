import React, { useState } from 'react'
import Cards from './cards/Cards'
import Controls from './controls/Controls'


const Main = () => {

	const [shape, setShape] = useState('')
	const [color, setColor] = useState('')
	const [size, setSize] = useState('')

	const shapeFromFilters = (shape) => {
		setShape(shape)
	}

	const colorFromFilters = (color) => {
    setColor(color)
	}

	const sizeFromFilters = (size) => {
		setSize(size)
	}

	return (
		<div className='main'>
		  <div className="blur">
				<Controls onClick={shapeFromFilters, colorFromFilters, sizeFromFilters}/>
				<Cards size={size} color={color} shape={shape}/>
			</div>
		</div>
	)
}

export default Main;
