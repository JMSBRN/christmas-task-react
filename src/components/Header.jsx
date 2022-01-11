import React from 'react'
import logoTree from './assets/svg/tree.svg'
import SelectHeader from './UI/SelectHeader'


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
		  <SelectHeader />
		</header>
	)
}

export default Header
