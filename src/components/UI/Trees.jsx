import React, {useState, useContext } from 'react'
import { ContextFilters } from '../ContextFilters';

const Trees = () => {
  const [trees] = useState([
    {id:"1"},
    {id:"2"},
    {id:"3"},
    {id:"4"},
    {id:"5"},
    {id:"6"}
  ]);
const {getFavoriteTree} = useContext(ContextFilters);

	return (
  <div className="tree-container menu-container">   
   {
     trees.map(tree =>
      <div key={tree.id} onClick={getFavoriteTree}  className="tree menu-item" data-tree={tree.id}></div>
      )
   }
  </div>
	)
}

export default Trees
