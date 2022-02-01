import React, {useContext} from 'react'
import logoTree from './assets/svg/tree.svg'
import SelectHeader from './UI/SelectHeader'
import { ContextFilters } from './ContextFilters'
import {Link} from 'react-router-dom'

const Header = () => {
 const {handleSearchInput} = useContext(ContextFilters)
	return (
		<header className="header">
			<nav className="nav-bar">
				<Link to="/christmas-task-react/home">
					<img className='header-logo-tree' src={logoTree} alt="logo-tree"/>
				</Link>
				<Link to="/christmas-task-react/toys">Игрушки</Link>
				<Link to="/christmas-task-react/tree">Ёлка</Link>
			</nav>
			<input className="header-search" onChange={handleSearchInput} autoComplete='off' type="search" />
		  <SelectHeader />
		</header>
	)
}
export default Header
