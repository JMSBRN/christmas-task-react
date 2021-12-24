import React from 'react'
import SelectSort from '../UI/SelectSort';

const Sort = (props) => {
	return (
		<div className="sort">
		<div className="controls-title">Сортировка</div>
	    <SelectSort 
			 selectedOption={"По названию от «А» до «Я»"}
			 optionOne={"По названию от «А» до «Я»"}
			 optionTow={"По количеству по возрастанию"}
			 optionThree={"По количеству по убыванию"}
			
			/>
		<button className="reset">Сброс фильтров</button>
	</div>
	)
}

export default Sort;
