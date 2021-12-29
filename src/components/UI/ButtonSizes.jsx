import React, { useState } from 'react'

const ButtonSizes = ({onClick}) => {

	const sizesArr = ["большой","средний","малый",]
	const [sizes] = useState(sizesArr)
 	  
  function getSize (e) { 
    onClick(e.target.value);
    }
  
	return (
		<div className="size">Размер: 
		{sizes.map(size => 
		 <button onClick={getSize} value={size} key={size} size ={size}/>
			)}
	</div>
	)
}

export default ButtonSizes
