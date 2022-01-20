import React, {useState, useContext} from 'react'
import { ContextFilters } from '../ContextFilters';

const BgTrees = () => {

  const {getbgMainTrees} = useContext(ContextFilters);

  const [bgs] = useState([
    
    {id:"1"},
    {id:"2"},
    {id:"3"},
    {id:"4"},
    {id:"5"},
    {id:"6"},
    {id:"7"},
    {id:"8"},
    {id:"9"},
    {id:"10"},
  ]);

	return (
		<div className="bg-container menu-container">
          {
           bgs.map(bg => 
            <div onClick={getbgMainTrees} key={bg.id}className="bg menu-item" data-bg={bg.id}></div>
            )
          }
    </div>
	)
}

export default BgTrees
