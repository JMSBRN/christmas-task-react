import React, { useContext } from 'react'
import { ContextFilters } from '../ContextFilters';

const Trees = () => {
const {getFavoriteTree} = useContext(ContextFilters);
function getTarget(e) {
  getFavoriteTree(e);
}
	return (
  <div className="tree-container menu-container">   
    <div onClick={getTarget}  className="tree menu-item" data-tree="1"></div>
    <div onClick={getTarget}  className="tree menu-item" data-tree="2"></div>
    <div onClick={getTarget}  className="tree menu-item" data-tree="3"></div>
    <div onClick={getTarget}  className="tree menu-item" data-tree="4"></div>
    <div onClick={getTarget}  className="tree menu-item" data-tree="5"></div>
    <div onClick={getTarget}  className="tree menu-item" data-tree="6"></div>
  </div>
	)
}

export default Trees
