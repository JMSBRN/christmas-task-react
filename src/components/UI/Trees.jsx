import React, { useState } from 'react'

const Trees = () => {
  
  const [trees, setTrees] = useState([1,2,3,4,5,6]);

	return (
  <div className="tree-container menu-container">
      {
        trees.map(tree => 
          <div  key={tree} className="tree menu-item" data-tree="1"></div>
        )
      }
      </div>
	)
}

export default Trees
