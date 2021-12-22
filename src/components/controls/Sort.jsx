import React from 'react'

const Sort = () => {
	return (
		<div class="sort">
		<div class="controls-title">Сортировка</div>
		<select class="sort-select">
			<option selected="" value="sort-name-max">По названию от «А» до «Я»</option>
			<option value="sort-name-min">По названию от «Я» до «А»</option>
			<option value="sort-count-max">По количеству по возрастанию</option>
			<option value="sort-count-min">По количеству по убыванию</option>
		</select>
		<button class="reset">Сброс фильтров</button>
	</div>
	)
}

export default Sort;
