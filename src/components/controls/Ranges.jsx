
import React, { useState, useContext } from 'react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { ContextFilters } from '../ContextFilters'

const Ranges = () => {

	const {handleChangeCount, valueCount, handleChangeYear, valueYear} = useContext(ContextFilters)

	return (
		<div className="range">
			<div className="controls-title">Фильтры по диапазону</div>
			<div>Количество экземпляров:</div>
			<div className="count-slider-container">
				<output className='slider-output'>{valueCount[0]}</output>
				<Box className='box' sx={{ width: 500 }}>
            <Slider
              sx={ {color: '#287471'}}
              className="slider"
              getAriaLabel={() => 'Temperature range'}
              value={valueCount}
							min={1}
							max={12}
							step={1}
              onChange={handleChangeCount}
              valueLabelDisplay="off"
            />
      </Box>
				<output className='slider-output'>{valueCount[1]}</output>
			</div>
			<div>Год приобретения:</div>
			<div className="year-slider-container">
				<output className='slider-output'>{valueYear[0]}</output>
				<Box className='box' sx={{ width: 500 }}>
            <Slider
              sx={ {color: '#287471'}}
              className="slider"
              getAriaLabel={() => 'Temperature range'}
              value={valueYear}
							min={1940}
							max={2020}
							step={10}
              onChange={handleChangeYear}
              valueLabelDisplay="off"
            />
      </Box>
				<output className='slider-output'>{valueYear[1]}</output>
			</div>
		</div>
	)
}
export default Ranges;

