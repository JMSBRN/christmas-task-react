import React, { useState } from 'react'
import img1 from '../assets/tree/1.png'
import img2 from '../assets/tree/2.png'
import img3 from '../assets/tree/3.png'
import img4 from '../assets/tree/4.png'
import img5 from '../assets/tree/5.png'

const TreeFavoriteDecorated = () => {
  const [decorTrees, setDecorTrees] = useState([
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 }
  ]);
  return (
    <div className="favorites-decorate">
      <div className="favorites-decorate-container">
        {
          decorTrees.map(decorTree =>
            <div className="tree-decorate">
              <img src={decorTree.src} className="tree-decorate-img" alt="decorate-tree" />
            </div>
          )
        }
      </div>
    </div>
  )
}
export default TreeFavoriteDecorated
