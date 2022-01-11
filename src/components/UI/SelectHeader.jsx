import React from 'react'
import selectImage from '../assets/svg/ball-2.svg'

const SelectHeader = () => {

	return (
		<div className="header-select">
			<div className="select-balls"><span>0</span></div>
			<img src={selectImage} alt="ball-select"/>
	</div>
	)
}

export default SelectHeader
