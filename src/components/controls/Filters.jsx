import React, { useState } from 'react'
import ButtonColors from '../UI/ButtonColors'
import ButtonShapes from '../UI/ButtonShapes'
import ButtonSizes from '../UI/ButtonSizes'
import dataArr from '../data'


 const shapesArr = ["шар", "колокольчик", "шишка", "снежинка","фигурка"]
 const colorsArr = ["белый","желтый", "красный","синий","зелёный"]
 const sizesArr = ["большой","средний","малый",]


 

const Filters = () => {
  

  const [data, setData] = useState(dataArr)
  const [shapes] = useState(shapesArr)
  const [colors] = useState(colorsArr)
  const [sizes] = useState(sizesArr)
  
  function getShape (e) {
    
  return e.target.value;


  }

 
  const sortedArrayByShape =  data.filter((el) => {
  
    if (el.shape.includes('шар')) {
     
    return data;
  
    }
  
  } );

  console.log(sortedArrayByShape);
 

	return (
		<div className="filters">
        <div className="controls-title">Фильтры по значению</div>
        <div className="shape">Форма:  
          {shapes.map(shape => 
              <ButtonShapes onClick = {getShape} key = {shape} value = {shape} shape={shape}/>
            )}
        </div>
        <div className="color">Цвет:   
          {colors.map(color => 
             <ButtonColors key = {color} color={color}/>
            )}
        </div>
        <div className="size">Размер: 
          {sizes.map(size => 
           <ButtonSizes key={size} size ={size}/>
            )}
        </div>
        <div className="favorite-container">Только любимые:
          <div className="form-group">
            <input type="checkbox" className="favorite-input" id="checkbox"/>
            <label htmlFor="checkbox" className="favorite-input-label"></label>
          </div>   
        </div> 
        
      </div>
	)
}

export default Filters;
