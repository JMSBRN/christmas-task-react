
import ButtonColors from '../UI/ButtonColors'
import ButtonShapes from '../UI/ButtonShapes'
import ButtonSizes from '../UI/ButtonSizes'

const Filters = ({ onClick, filters }) => {

  const choiceFromButShapes = (shape) => {
    const newArr = { ...filters };
    if (!filters.shape.includes(shape)) {
      newArr.shape.push(shape)
    } else {
      if (filters.shape.includes(shape)) {
        const index = newArr.shape.indexOf(shape);
        if (index !== -1) {
          newArr.shape.splice(index, 1);
        }
      }

    }

    onClick(newArr)
  }

  const choiceFromButColors = (color) => {
    const newArr = { ...filters };
    if (!filters.color.includes(color)) {
      newArr.color.push(color)
      
    } else {
      if(filters.color.includes(color)){
        const index = newArr.color.indexOf(color);
        if(index !== -1) {
          newArr.color.splice(index, 1)
        }
      }
    }

    onClick(newArr)
  }

  const choiceFromButSizes = (size) => {
    const newArr = { ...filters };
    if (!filters.size.includes(size)) {
      newArr.size.push(size)
    } else {
      if(filters.size.includes(size)){
        const index = newArr.size.indexOf(size);
        if(index !== -1) {
          newArr.size.splice(index, 1)
        }
      }
    }
    onClick(newArr)
  }

  return (
    <div className="filters">
      <div className="controls-title">Фильтры по значению</div>
      <ButtonShapes onClick={choiceFromButShapes} />
      <ButtonColors onClick={choiceFromButColors} />
      <ButtonSizes onClick={choiceFromButSizes} />
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
