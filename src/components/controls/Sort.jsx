import React, {useContext} from 'react'
import SelectSort from '../UI/SelectSort';
import { ContextFilters } from '../ContextFilters';
const Sort = () => {
	const {sortbySelect, selectedSort} = useContext(ContextFilters)

	function refreshPage(){
    window.location.reload();
}
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
	  <button onClick={refreshPage}  className='reset'>Сброс фильтров</button>
	</div>
	)
}
export default Sort;
