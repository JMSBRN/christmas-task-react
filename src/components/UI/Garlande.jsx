import React, { useState } from 'react';

const Garlande = () => {
	const [lights] = useState([
		[{ id: "1", rotate: "65", translate: "60" },
		{ id: "2", rotate: "77", translate: "60" },
		{ id: "3", rotate: "89", translate: "60" },
		{ id: "4", rotate: "101", translate: "60" },
		{ id: "5", rotate: "113", translate: "60" }
		],
		[{ id: "1", rotate: "60", translate: "85" },
		{ id: "2", rotate: "70", translate: "85" },
		{ id: "3", rotate: "80", translate: "85" },
		{ id: "4", rotate: "90", translate: "85" },
		{ id: "5", rotate: "100", translate: "85" },
		{ id: "6", rotate: "110", translate: "85" },
		{ id: "7", rotate: "120", translate: "85" },
		],
		[{ id: "1", rotate: "60", translate: "115" },
		{ id: "2", rotate: "68", translate: "115" },
		{ id: "3", rotate: "76", translate: "115" },
		{ id: "4", rotate: "84", translate: "115" },
		{ id: "5", rotate: "92", translate: "115" },
		{ id: "6", rotate: "100", translate: "115" },
		{ id: "7", rotate: "108", translate: "115" },
		{ id: "8", rotate: "116", translate: "115" },
		],
		[{ id: "1", rotate: "60", translate: "150" },
		{ id: "2", rotate: "66", translate: "150" },
		{ id: "3", rotate: "72", translate: "150" },
		{ id: "4", rotate: "78", translate: "150" },
		{ id: "5", rotate: "84", translate: "150" },
		{ id: "6", rotate: "90", translate: "150" },
		{ id: "8", rotate: "96", translate: "150" },
		{ id: "9", rotate: "102", translate: "150" },
		{ id: "10", rotate: "108", translate: "150" },
		{ id: "11", rotate: "114", translate: "150" },
		{ id: "12", rotate: "120", translate: "150" },
		],
		[{ id: "1", rotate: "55", translate: "190" },
		{ id: "2", rotate: "59", translate: "190" },
		{ id: "3", rotate: "63", translate: "190" },
		{ id: "4", rotate: "67", translate: "190" },
		{ id: "5", rotate: "71", translate: "190" },
		{ id: "6", rotate: "75", translate: "190" },
		{ id: "8", rotate: "79", translate: "190" },
		{ id: "9", rotate: "83", translate: "190" },
		{ id: "10", rotate: "87", translate: "190" },
		{ id: "11", rotate: "91", translate: "190" },
		{ id: "13", rotate: "95", translate: "190" },
		{ id: "14", rotate: "99", translate: "190" },
		{ id: "15", rotate: "103", translate: "190" },
		{ id: "16", rotate: "107", translate: "190" },
		{ id: "17", rotate: "111", translate: "190" },
		{ id: "18", rotate: "115", translate: "190" },
		{ id: "19", rotate: "119", translate: "190" },
		{ id: "20", rotate: "123", translate: "190" },
		],
		[{ id: "1", rotate: "55", translate: "232.5" },
		{ id: "2", rotate: "58", translate: "232.5" },
		{ id: "3", rotate: "62", translate: "232.5" },
		{ id: "4", rotate: "65.5", translate: "232.5" },
		{ id: "5", rotate: "69", translate: "232.5" },
		{ id: "6", rotate: "72.5", translate: "232.5" },
		{ id: "8", rotate: "76", translate: "232.5" },
		{ id: "9", rotate: "79.5", translate: "232.5" },
		{ id: "10", rotate: "83", translate: "232.5" },
		{ id: "11", rotate: "86.5", translate: "232.5" },
		{ id: "13", rotate: "90", translate: "232.5" },
		{ id: "14", rotate: "93.5", translate: "232.5" },
		{ id: "15", rotate: "97", translate: "232.5" },
		{ id: "16", rotate: "100.5", translate: "232.5" },
		{ id: "17", rotate: "104", translate: "232.5" },
		{ id: "18", rotate: "107.5", translate: "232.5" },
		{ id: "19", rotate: "111", translate: "232.5" },
		{ id: "21", rotate: "114.5", translate: "232.5" },
		{ id: "22", rotate: "118", translate: "232.5" },
		{ id: "23", rotate: "121.5", translate: "232.5" },
		{ id: "24", rotate: "125", translate: "232.5" },
		],
		[{ id: "1", rotate: "58", translate: "277.5" },
		{ id: "2", rotate: "61", translate: "277.5" },
		{ id: "3", rotate: "64", translate: "277.5" },
		{ id: "4", rotate: "67", translate: "277.5" },
		{ id: "5", rotate: "70", translate: "277.5" },
		{ id: "6", rotate: "73", translate: "277.5" },
		{ id: "8", rotate: "76", translate: "277.5" },
		{ id: "9", rotate: "79", translate: "277.5" },
		{ id: "10", rotate: "82", translate: "277.5" },
		{ id: "11", rotate: "85", translate: "277.5" },
		{ id: "13", rotate: "88", translate: "277.5" },
		{ id: "14", rotate: "91", translate: "277.5" },
		{ id: "15", rotate: "94", translate: "277.5" },
		{ id: "16", rotate: "97", translate: "277.5" },
		{ id: "17", rotate: "100", translate: "277.5" },
		{ id: "18", rotate: "103", translate: "277.5" },
		{ id: "19", rotate: "106", translate: "277.5" },
		{ id: "21", rotate: "109", translate: "277.5" },
		{ id: "22", rotate: "112", translate: "277.5" },
		{ id: "23", rotate: "115", translate: "277.5" },
		{ id: "24", rotate: "118", translate: "277.5" },
		{ id: "25", rotate: "121", translate: "277.5" },
		{ id: "26", rotate: "124", translate: "277.5" },
		{ id: "27", rotate: "127", translate: "277.5" },
		],
		[{ id: "1", rotate: "58", translate: "325" },
		{ id: "2", rotate: "60", translate: "325" },
		{ id: "3", rotate: "63", translate: "325" },
		{ id: "4", rotate: "65.5", translate: "325" },
		{ id: "5", rotate: "68", translate: "325" },
		{ id: "6", rotate: "70.5", translate: "325" },
		{ id: "8", rotate: "73", translate: "325" },
		{ id: "9", rotate: "75.5", translate: "325" },
		{ id: "10", rotate: "78", translate: "325" },
		{ id: "11", rotate: "80.5", translate: "325" },
		{ id: "13", rotate: "83", translate: "325" },
		{ id: "14", rotate: "85.5", translate: "325" },
		{ id: "15", rotate: "88", translate: "325" },
		{ id: "16", rotate: "90.5", translate: "325" },
		{ id: "17", rotate: "93", translate: "325" },
		{ id: "18", rotate: "95.5", translate: "325" },
		{ id: "19", rotate: "98", translate: "325" },
		{ id: "21", rotate: "100.5", translate: "325" },
		{ id: "22", rotate: "103", translate: "325" },
		{ id: "23", rotate: "105.5", translate: "325" },
		{ id: "24", rotate: "108", translate: "325" },
		{ id: "25", rotate: "110.5", translate: "325" },
		{ id: "26", rotate: "113", translate: "325" },
		{ id: "27", rotate: "115.5", translate: "325" },
		{ id: "28", rotate: "118", translate: "325" },
		{ id: "29", rotate: "120.5", translate: "325" },
		{ id: "30", rotate: "123", translate: "325" },
		{ id: "31", rotate: "125.5", translate: "325" },
		{ id: "32", rotate: "128", translate: "325" },
		],
	]);

	return (
		<div className="garland-tree-container ">
			<ul className="lightrope" style={{ width: "120px", height: "120px" }}>
				{lights[0].map(light =>
					<li key={light.id} className="multicolor" style={{ transform: `rotate(${light.rotate}deg) translate(${light.translate}px) rotate(-${light.translate}deg)` }}></li>)}
			</ul>
			<ul className="lightrope" style={{ width: "170px", height: "170px" }}>
				{lights[1].map(light =>
					<li key={light.id} className="multicolor" style={{ transform: `rotate(${light.rotate}deg) translate(${light.translate}px) rotate(-${light.translate}deg)` }}></li>)}
			</ul>
			<ul className="lightrope" style={{ width: "230px", height: "230px" }}>
				{lights[2].map(light =>
					<li key={light.id} className="multicolor" style={{ transform: `rotate(${light.rotate}deg) translate(${light.translate}px) rotate(-${light.translate}deg)` }}></li>)}
			</ul>
			<ul className="lightrope" style={{ width: "300px", height: "300px" }}>
				{lights[3].map(light =>
						<li key={light.id} className="multicolor" style={{ transform: `rotate(${light.rotate}deg) translate(${light.translate}px) rotate(-${light.translate}deg)` }}></li>)}
			</ul>
			<ul className="lightrope" style={{ width: "380px", height: "380px" }}>
				{lights[4].map(light =>
						<li key={light.id} className="multicolor" style={{ transform: `rotate(${light.rotate}deg) translate(${light.translate}px) rotate(-${light.translate}deg)` }}></li>)}
			</ul>
			<ul className="lightrope" style={{ width: "465px", height: "465px" }}>
				{lights[5].map(light =>
					<li key={light.id} className="multicolor" style={{ transform: `rotate(${light.rotate}deg) translate(${light.translate}px) rotate(-${light.translate}deg)` }}></li>)}
			</ul>
			<ul className="lightrope" style={{ width: "555px", height: "555px" }}>
				{lights[6].map(light =>
						<li key={light.id} className="multicolor" style={{ transform: `rotate(${light.rotate}deg) translate(${light.translate}px) rotate(-${light.translate}deg)` }}></li>)}
			</ul>
			<ul className="lightrope" style={{ width: "650px", height: "650px" }}>
				{lights[7].map(light =>
						<li key={light.id} className="multicolor" style={{ transform: `rotate(${light.rotate}deg) translate(${light.translate}px) rotate(-${light.translate}deg)` }}></li>)}
			</ul>
		</div>
	)
}
export default Garlande;



