import React, {useContext} from 'react'
import Button from '../UI/Button';
import SelectSort from '../UI/SelectSort';
import { ContextFilters } from '../ContextFilters';
const Sort = () => {
	const {sortbySelect, selectedSort} = useContext(ContextFilters)
	return (
		<div className="sort">
		<div className="controls-title">Сортировка</div>
	    <SelectSort 
			  value={selectedSort}
			  onChange={sortbySelect}
				defaultOption="Выберите Сортировку"
				options={[
					 {value:'1', name: 'По названию от «А» до «Я»'},
					 {value:'2', name: 'По названию от «Я» до «А»'},
					 {value:'3', name: 'По количеству по возрастанию'},
					 {value:'4', name: "По количеству по убыванию"}
				 ]}
			/>
	  <Button className={"reset"} text= {"Сброс фильтров"}/>
	</div>
	)
}
export default Sort;
