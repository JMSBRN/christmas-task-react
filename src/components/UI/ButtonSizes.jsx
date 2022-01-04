import React, { useState } from 'react'

const ButtonSizes = ({onClick}) => {

	const sizesArr = ["большой","средний","малый",]
	const [sizes] = useState(sizesArr)
 	  
  function getSize (e) { 
    onClick(e.target.value);
		toggleActiveClass(e);
    }

		function toggleActiveClass (e){
			e.target.classList.toggle("active");
		 }
  
	return (
		<div className="size">Размер: 
		{sizes.map(size => 
		 <button
				onClick={getSize}
				value={size}
				key={size}
				size ={size}
				className={''}/>
			)}
	</div>
	)
}

export default ButtonSizes
