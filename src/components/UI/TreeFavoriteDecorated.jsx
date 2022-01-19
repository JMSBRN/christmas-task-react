import React from 'react'
import img1 from '../assets/tree/1.png'
import img2 from '../assets/tree/2.png'
import img3 from '../assets/tree/3.png'
import img4 from '../assets/tree/4.png'
import img5 from '../assets/tree/5.png'

const TreeFavoriteDecorated = () => {
  return (
    <div class="favorites-decorate">
      <div class="favorites-decorate-container">
        <div class="tree-decorate">
          <img src={img1} class="tree-decorate-img" alt="decorate-tree" />
        </div>
        <div class="tree-decorate">
          <img src={img2} class="tree-decorate-img" alt="decorate-tree" />
        </div>
        <div class="tree-decorate">
          <img src={img3} class="tree-decorate-img" alt="decorate-tree" />
        </div>
        <div class="tree-decorate">
          <img src={img4} class="tree-decorate-img" alt="decorate-tree" />
        </div>
        <div class="tree-decorate">
          <img src={img5} class="tree-decorate-img" alt="decorate-tree" />
        </div>
      </div>
    </div>
  )
}
export default TreeFavoriteDecorated
