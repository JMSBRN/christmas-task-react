import React, { useState } from 'react';

const Garlande = () => {
	const [lights] = useState([
			{ id:"1",rotate: "65", translate: "60" },
			{ id:"2",rotate: "77", translate: "60" },
			{ id:"3",rotate: "89", translate: "60" },
			{ id:"4",rotate: "101", translate: "60" },
			{ id:"5",rotate: "113", translate: "60" }
	]);

	return (
		<div className="garland-tree-container ">
			<ul className="lightrope" style={{ width: "120px", height: "320px" }}>
				{		  
					lights.map(light =>
						<li key={light.id} className="multicolor" style={{ transform: `rotate(${light.rotate}deg) translate(${light.translate}px) rotate(-${light.translate}deg)` }}></li>
					)
				}
			</ul>
		</div>
	)
}
export default Garlande;



