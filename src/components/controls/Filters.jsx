import React, { useState } from 'react'
import ButtonColors from '../UI/ButtonColors'
import ButtonShapes from '../UI/ButtonShapes'
import ButtonSizes from '../UI/ButtonSizes'


 const shapesArr = ["шар", "колокольчик", "шишка", "снежинка","фигурка"]
 const colorsArr = ["белый","желтый", "красный","синий","зелёный"]
 const sizesArr = ["большой","средний","малый",]


const Filters = () => {

  const [shapes, setShapes] = useState(shapesArr)
  const [colors, setColors] = useState(colorsArr)
  const [sizes, setSizes] = useState(sizesArr)
	return (
		<div className="filters">
        <div className="controls-title">Фильтры по значению</div>
        <div className="shape">Форма:  
          {shapes.map(shape => 
              <ButtonShapes key = {shape} shape={shape}/>
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
