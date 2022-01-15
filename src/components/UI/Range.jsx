import React,{useState} from 'react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';



const Range = () => {

	const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

	return (
		<Box className='box' sx={{ width: 170 }}>
      <Slider className="slider"
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </Box>
	)
}
export default Range;

