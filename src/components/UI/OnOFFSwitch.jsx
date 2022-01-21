import React, {useContext} from 'react';
import { ContextFilters } from '../ContextFilters';

const OnOFFSwitch = () => {
const {getGarlandeCheck} = useContext(ContextFilters);
  return (
    <div className="onoffswitch">
    <input onChange={getGarlandeCheck}
       type="checkbox"
       name="onoffswitch"
       className="onoffswitch-checkbox"
       id="myonoffswitch" />
    <label className="onoffswitch-label" htmlFor="myonoffswitch">
      <div className="onoffswitch-inner"></div>
      <div className="onoffswitch-switch"></div>
    </label>
  </div>
  )
};

export default OnOFFSwitch;
