import React from 'react'
import OnOFFSwitch from './OnOFFSwitch'

const GarlandeTree = () => {
  return (
    <div className="garland-container menu-container">
      <div className="garland-btns">
        <button className="color-btn multicolor-btn" data-color="multicolor"></button>
        <button className="color-btn red-btn" data-color="red"></button>
        <button className="color-btn blue-btn" data-color="blue"></button>
        <button className="color-btn yellow-btn" data-color="yellow"></button>
        <button className="color-btn green-btn" data-color="green"></button>
      </div>
      <div className="onoffswitch">
        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" defaultChecked="" />
        <label className="onoffswitch-label" htmlFor="myonoffswitch">
          <div className="onoffswitch-inner"></div>
          <div className="onoffswitch-switch"></div>
        </label>
      </div>
    </div>
  )
}

export default GarlandeTree
