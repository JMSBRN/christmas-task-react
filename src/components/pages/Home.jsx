import React from 'react'
import{Link} from 'react-router-dom'

const Home = () => {
	return (
		<div className='home'>
			<div className='blur'>
			<div class="page start-page">
					<div class="ball ball1"></div>
					<div class="ball ball2"></div>
					<h1 class="start-page-title">Новогодняя игра<span>«Наряди ёлку»</span></h1>
					<button class="switch-start-page" data-page="mainPage"><Link to="/toys">Начать</Link></button>
				</div>
			</div>
		</div>
	)
}

export default Home
