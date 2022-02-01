import React from 'react'
import{Link} from 'react-router-dom'

const Home = () => {
	return (
		<div className='home'>
			<div className='blur'>
			<div className="page start-page">
					<div className="ball ball1"></div>
					<div className="ball ball2"></div>
					<h1 className="start-page-title">Новогодняя игра<span>«Наряди ёлку»</span></h1>
					<button className="switch-start-page" data-page="mainPage"><Link to="/christmas-task-react/toys">Начать</Link></button>
				</div>
			</div>
		</div>
	)
}

export default Home
