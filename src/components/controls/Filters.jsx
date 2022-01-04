
import ButtonColors from '../UI/ButtonColors'
import ButtonShapes from '../UI/ButtonShapes'
import ButtonSizes from '../UI/ButtonSizes'


let filters = {shape: [], color:[], size:[]}

const Filters = ({onClick}) => {

 
  
    const choiceFromButShapes = (shape) => {
      if(!filters.shape.includes(shape)) {
        filters.shape.push(shape)
        onClick(filters)
      }   
    }

    const choiceFromButColors = (color) => {
      if(!filters.color.includes(color)){
        filters.color.push(color)
        onClick(filters)
      } 
    }

    const choiceFromButSizes = (size) => {
      if(!filters.size.includes(size)){
        filters.size.push(size)
        onClick(filters)
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
