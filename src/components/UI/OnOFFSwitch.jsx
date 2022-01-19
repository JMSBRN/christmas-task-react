import React from 'react';

const OnOFFSwitch = () => {
  return (
    <div className="onoffswitch">
      <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" checked=""/>
        <label className="onoffswitch-label" for="myonoffswitch">
          <div className="onoffswitch-inner"></div>
          <div className="onoffswitch-switch"></div>
        </label>
    </div>
  )
};

export default OnOFFSwitch;
