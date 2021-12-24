import React from 'react'

const SelectSort = (props) => {
	return (
		<select className="sort-select">
			<option selected="" value="sort-name-max">{props.selectedOption}</option>
			<option value="sort-name-min">{props.optionOne}</option>
			<option value="sort-count-max">{props.optionTow}</option>
			<option value="sort-count-min">{props.optionThree}</option>
	</select>
	)
}

export default SelectSort
