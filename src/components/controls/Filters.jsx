
import ButtonColors from '../UI/ButtonColors'
import ButtonFavorite from '../UI/ButtonFavorite'
import ButtonShapes from '../UI/ButtonShapes'
import ButtonSizes from '../UI/ButtonSizes'
import { ContextFilters } from '../ContextFilters'
import { useContext } from 'react'

const Filters = () => {
const {choiceFromButton} = useContext(ContextFilters)
  return (
    <div className="filters">
      <div className="controls-title">Фильтры по значению</div>
      <ButtonShapes onClick={(value)=> choiceFromButton(value, "shape")} />
      <ButtonColors onClick={(value)=> choiceFromButton(value, "color")}  />
      <ButtonSizes onClick={(value)=> choiceFromButton(value, "size") } />
      <ButtonFavorite onChange={(value)=> choiceFromButton(value, "favorite")}/>
    </div>
  )
}

export default Filters;
