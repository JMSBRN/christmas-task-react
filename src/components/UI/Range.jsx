import React from 'react'

const Range = (props) => {
	return (
		<div className={props.name}>
			<span className="control-span">{props.title}</span>
			<div className="year-slider-container">
				<output className="slider-output">{props.inputFirst}</output>
				<div className="year-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
					<div className="noUi-base">
						<div className="noUi-connects">
							<div className="noUi-connect" >
							</div>
						</div>
						<div className="noUi-origin" >
							<div className="noUi-handle noUi-handle-lower"
								data-handle={props.dataHamndler}
								tabIndex={props.tabIndex}
								role={props.role}
								aria-orientation={props.ariaOrientation}
								aria-valuemin={props.ariaValuemin}
								aria-valuemax={props.ariaValuemax}
								aria-valuenow={props.ariaValuenow}
								aria-valuetext={props.ariaValueText}>
								<div className="noUi-touch-area">
								</div>
							</div>
						</div>
						<div className="noUi-origin">
							<div className="noUi-handle noUi-handle-upper"
								data-handle={props.dataHamndler}
								tabIndex={props.tabIndex}
								role={props.role}
								aria-orientation={props.ariaOrientation}
								aria-valuemin={props.ariaValuemin}
								aria-valuemax={props.ariaValuemax}
								aria-valuenow={props.ariaValuenow}
								aria-valuetext={props.ariaValueText}>
								<div className="noUi-touch-area"></div></div></div></div></div>
				<output className="slider-output">{props.inputSecond}</output>
			</div>
		</div>
	)
}

export default Range
