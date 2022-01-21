import React,{useState} from 'react'
import OnOFFSwitch from './OnOFFSwitch'

const GarlandeButtons = () => {
  const [btns, setBtns] = useState([
    {class: "multicolor-btn", data:"multicolor"},
    {class: "red-btn", data:"red"},
    {class: "blue-btn", data:"blue"},
    {class: "yellow-btn", data:"yelow"},
    {class: "green-btn", data:"green"}
]);
  return (
    <div className="garland-container menu-container">
      <div className="garland-btns">
          {btns.map(btn=> <button key={btn.data} className={`color-btn ${btn.class}`} data-color={btn.data}></button>)}
      </div>
      <OnOFFSwitch/>
    </div>
  )
}
export default GarlandeButtons

