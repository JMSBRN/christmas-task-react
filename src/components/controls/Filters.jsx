
import ButtonColors from '../UI/ButtonColors'
import ButtonShapes from '../UI/ButtonShapes'
import ButtonSizes from '../UI/ButtonSizes'

const Filters = ({ onClick, filters}) => {
  const choiceFromButton = (value, form) => {
    const newArr = { ...filters };
    if (!filters[form].includes(value)) {
      newArr[form].push(value)
    } else {
      if (filters[form].includes(value)) {
        const index = newArr[form].indexOf(value);
        if (index !== -1) {
          newArr[form].splice(index, 1);
        }
      }
    }
    onClick(newArr)
  }
  return (
    <div className="filters">
      <div className="controls-title">Фильтры по значению</div>
      <ButtonShapes onClick={(value)=> choiceFromButton(value, "shape")} />
      <ButtonColors onClick={(value)=> choiceFromButton(value, "color")}  />
      <ButtonSizes onClick={(value)=> choiceFromButton(value, "size") } />
      <div className="favorite-container">Только любимые:
        <div className="form-group">
          <input type="checkbox" className="favorite-input" id="checkbox" />
          <label htmlFor="checkbox" className="favorite-input-label"></label>
        </div>
      </div>
    </div>
  )
}

export default Filters;
