import React, { useState } from 'react'
import ButtonColors from '../UI/ButtonColors'
import ButtonShapes from '../UI/ButtonShapes'
import ButtonSizes from '../UI/ButtonSizes'


 const shapesArr = ["шар", "колокольчик", "шишка", "снежинка","фигурка"]
 const colorsArr = ["белый","желтый", "красный","синий","зелёный"]
 const sizesArr = ["большой","средний","малый",]


const Filters = () => {

  const [shapes] = useState(shapesArr)
  const [colors] = useState(colorsArr)
  const [sizes] = useState(sizesArr)
	return (
		<div className="filters">
        <div className="controls-title">Фильтры по значению</div>
        <div className="shape">Форма:  
          {shapes.map(shape => 
              <ButtonShapes shape={shape}/>
            )}
        </div>
        <div className="color">Цвет:   
          {colors.map(color => 
             <ButtonColors color={color}/>
            )}
        </div>
        <div className="size">Размер: 
          {sizes.map(size => 
           <ButtonSizes size ={size}/>
            )}
        </div>
        <div className="favorite-container">Только любимые:
          <div className="form-group">
            <input type="checkbox" className="favorite-input" id="checkbox"/>
            <label for="checkbox" className="favorite-input-label"></label>
          </div>   
        </div> 
        
      </div>
	)
}

export default Filters;
