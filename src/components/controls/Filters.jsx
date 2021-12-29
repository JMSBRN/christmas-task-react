
import ButtonColors from '../UI/ButtonColors'
import ButtonShapes from '../UI/ButtonShapes'
import ButtonSizes from '../UI/ButtonSizes'

const Filters = ({onClick}) => {

    const choiceFromButShapes = (choice) => {
      onClick(choice)
    }

    const choiceFromButColors = (choice) => {
      onClick(choice)
    }

    const choiceFromButSizes = (choice) => {
      onClick(choice)
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
