import React, { useContext } from 'react'
import selectImage from '../assets/svg/ball-2.svg'
import { ContextFilters } from '../ContextFilters'

const SelectHeader = () => {
const {selected} = useContext(ContextFilters)
	return (
		<div className="header-select">
			<div className="select-balls"><span>{selected}</span></div>
			<img src={selectImage} alt="ball-select"/>
	</div>
	)
}
export default SelectHeader
