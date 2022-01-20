import React, {useState} from 'react'

const BgTrees = () => {

  const [bgs, setBgs] = useState([1,2,3,4,5,6,7,8,9,10]);

	return (
		<div className="bg-container menu-container">
          {
           bgs.map(bg => 
            <div key={bg}className="bg menu-item" data-bg="1"></div>
            )
          }
    </div>
	)
}

export default BgTrees
