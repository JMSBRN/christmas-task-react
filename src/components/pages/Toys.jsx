import React from 'react'
import Cards from '../cards/Cards'
import Controls from '../controls/Controls'

const Toys = () => {
	return (
		<div className='main'>
		  <div className="blur">
					<Controls/>
					<Cards/>
			</div>
		</div>
	)
}
export default Toys;
