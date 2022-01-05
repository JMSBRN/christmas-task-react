
import ButtonColors from '../UI/ButtonColors'
import ButtonShapes from '../UI/ButtonShapes'
import ButtonSizes from '../UI/ButtonSizes'

const Filters = ({onClick, filters}) => {
    const choiceFromButShapes = (shape) => {
        const newArr = {...filters};
        if(!filters.shape.includes(shape)) {
        newArr.shape.push(shape)
        onClick(newArr)
      }
    }

    const choiceFromButColors = (color) => {
        const newArr = {...filters};
        if(!filters.color.includes(color)){ 
        newArr.color.push(color)
        onClick(newArr)
      } 
    }

    const choiceFromButSizes = (size) => {
      const newArr = {...filters};
      if(!filters.size.includes(size)){
        newArr.size.push(size)
        onClick(newArr)
      }      
    }
 
	return (
		<div className="filters">
        <div className="controls-title">Фильтры по значению</div>
        <ButtonShapes onClick={choiceFromButShapes} />
        <ButtonColors onClick={choiceFromButColors}/>
        <ButtonSizes  onClick={choiceFromButSizes}/>
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
