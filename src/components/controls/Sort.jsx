import React, {useState} from 'react'
import Button from '../UI/Button';
import SelectSort from '../UI/SelectSort';


const Sort = () => {
	return (
		<div className="sort">
		<div className="controls-title">Сортировка</div>
	    <SelectSort 
			 selectedOption={"По названию от «А» до «Я»"}
			 optionOne={"По названию от «Я» до «А»"}
			 optionTwo={"По количеству по возрастанию"}
			 optionThree={"По количеству по убыванию"}
			
			/>
	  <Button className={"reset"} text= {"Сброс фильтров"}/>
	</div>
	)
}

export default Sort;
