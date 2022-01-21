import React,{useState, useContext} from 'react'
import OnOFFSwitch from './OnOFFSwitch'
import { ContextFilters } from '../ContextFilters';

const GarlandeButtons = () => {
  const [btns, setBtns] = useState([
    {class: "multicolor-btn", data:"multicolor"},
    {class: "red-btn", data:"red"},
    {class: "blue-btn", data:"blue"},
    {class: "yellow-btn", data:"yellow"},
    {class: "green-btn", data:"green"}
]);
const {getGerlandeButtonColor} = useContext(ContextFilters);
  return (
    <div className="garland-container menu-container">
      <div className="garland-btns">
          {btns.map(btn=> <button onClick={getGerlandeButtonColor} key={btn.data} className={`color-btn ${btn.class}`} data-color={btn.data}></button>)}
      </div>
      <OnOFFSwitch/>
    </div>
  )
}
export default GarlandeButtons

