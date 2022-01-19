import React from 'react'
import img1 from '../assets/tree/1.png'
import img2 from '../assets/tree/2.png'
import img3 from '../assets/tree/3.png'
import img4 from '../assets/tree/4.png'
import img5 from '../assets/tree/5.png'

const TreeFavoriteDecorated = () => {
  return (
    <div className="favorites-decorate">
      <div className="favorites-decorate-container">
        <div className="tree-decorate">
          <img src={img1} className="tree-decorate-img" alt="decorate-tree" />
        </div>
        <div className="tree-decorate">
          <img src={img2} className="tree-decorate-img" alt="decorate-tree" />
        </div>
        <div className="tree-decorate">
          <img src={img3} className="tree-decorate-img" alt="decorate-tree" />
        </div>
        <div className="tree-decorate">
          <img src={img4} className="tree-decorate-img" alt="decorate-tree" />
        </div>
        <div className="tree-decorate">
          <img src={img5} className="tree-decorate-img" alt="decorate-tree" />
        </div>
      </div>
    </div>
  )
}
export default TreeFavoriteDecorated
