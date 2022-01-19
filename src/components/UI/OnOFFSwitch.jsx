import React from 'react';

const OnOFFSwitch = () => {
  return (
    <div class="onoffswitch">
      <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked=""/>
        <label class="onoffswitch-label" for="myonoffswitch">
          <div class="onoffswitch-inner"></div>
          <div class="onoffswitch-switch"></div>
        </label>
    </div>
  )
};

export default OnOFFSwitch;
