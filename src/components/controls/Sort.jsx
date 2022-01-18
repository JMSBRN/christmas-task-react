import React, {useState} from 'react'
import Button from '../UI/Button';
import SelectSort from '../UI/SelectSort';

const Sort = () => {
	const [selected, setSelected] = useState('')
	function handleChange(selected) {
		setSelected(selected)
	}
	return (
		<div className="sort">
		<div className="controls-title">Сортировка</div>
	    <SelectSort 
			  value={selected}
			  onChange={handleChange}
				defaultOption="По названию от «А» до «Я»"
				options={[
					 {value:'1', name: 'По названию от «Я» до «А»'},
					 {value:'2', name: 'По количеству по возрастанию'},
					 {value:'3', name: "По количеству по убыванию"}
				 ]}
			/>
	  <Button className={"reset"} text= {"Сброс фильтров"}/>
	</div>
	)
}

export default Sort;
