import React from 'react'
import logoTree from './assets/svg/tree.svg'
import selectImage from './assets/svg/ball-2.svg'
const Header = () => {
	return (
		<header className="header">
			<nav className="nav-bar">
				<a href='/#'>
					<img className='header-logo-tree' src={logoTree} alt="logo-tree"/>
				</a>
				<a href='/#'>Toys</a>
				<a href='/#'>Tree</a>
			</nav>
			<input type="search" className="header-search" autoComplete="off" />
			<div className="header-select">
				<div className="select-balls"><span>0</span></div>
				<img src={selectImage} alt="ball-select"/>
			</div>
		</header>
	)
}

export default Header
