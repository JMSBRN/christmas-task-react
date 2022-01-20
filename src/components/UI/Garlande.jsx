import React, { useState } from 'react';

const Garlande = () => {

	const [lights, setLights] = useState([
		[
			{ rotate: "65", translate: "60" },
			{ rotate: "77", translate: "60" },
			{ rotate: "89", translate: "60" },
			{ rotate: "101", translate: "60" },
			{ rotate: "113", translate: "60" },
		]

	]);


	return (
		<div style={{ color: "black" }} class="garland-tree-container ">
			<ul class="lightrope" style={{ color: "black", width: "120px; height: 120px" }}>
				{
					lights.map(arr =>
						arr.map(light =>
							<li class="multicolor" style={{ transform: `rotate(${light.rotate}deg) translate(${light.translate}px) rotate(-${light.translate}deg)` }}></li>
						)
					)
				}
			</ul>
		</div>
	)
}

export default Garlande;



