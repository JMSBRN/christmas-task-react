
import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

const Ranges = () => {

	const [value, setValue] = useState([3, 6])
	const [value2, setValue2] = useState([1960, 1980])

 function handleChangeCount(event, newValue) {
	setValue(newValue);

 }
 function handleChangeYear(event, newValue) {
	setValue2(newValue);

 }
	return (
		<div className="range">
			<div className="controls-title">Фильтры по диапазону</div>
			<div>Количество экземпляров:</div>
			<div className="count-slider-container">
				<output className='slider-output'>{value[0]}</output>
				<Box className='box' sx={{ width: 500 }}>
            <Slider
              sx={ {color: '#287471'}}
              className="slider"
              getAriaLabel={() => 'Temperature range'}
              value={value}
							min={1}
							max={12}
							step={1}
              onChange={handleChangeCount}
              valueLabelDisplay="off"
            />
      </Box>
				<output className='slider-output'>{value[1]}</output>
			</div>
			<div>Год приобретения:</div>
			<div className="year-slider-container">
				<output className='slider-output'>{value2[0]}</output>
				<Box className='box' sx={{ width: 500 }}>
            <Slider
              sx={ {color: '#287471'}}
              className="slider"
              getAriaLabel={() => 'Temperature range'}
              value={value2}
							min={1940}
							max={2020}
							step={10}
              onChange={handleChangeYear}
              valueLabelDisplay="off"
            />
      </Box>
				<output className='slider-output'>{value2[1]}</output>
			</div>
		</div>
	)
}
export default Ranges;

