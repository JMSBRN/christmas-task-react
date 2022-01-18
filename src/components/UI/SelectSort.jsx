import React from 'react'

const SelectSort = ({options,value,defaultOption,onChange}) => {
	return (
		<select className="sort-select" value={value} onChange={e => onChange(e.target.value)}	>
			<option>{defaultOption}</option>
			{options.map(option => 
				<option key={option.value} value={option.value}>{option.name}</option>
			)}
		</select>
	)
}
export default SelectSort
