import React, {useContext} from 'react'
import logoTree from './assets/svg/tree.svg'
import SelectHeader from './UI/SelectHeader'
import { ContextFilters } from './ContextFilters'


const Header = () => {

 const {handleSearchInput} = useContext(ContextFilters)
	return (
		<header className="header">
			<nav className="nav-bar">
				<a href='/#'>
					<img className='header-logo-tree' src={logoTree} alt="logo-tree"/>
				</a>
				<a href='/#'>Toys</a>
				<a href='/#'>Tree</a>
			</nav>
			<input onChange={handleSearchInput} autoComplete='off' type="search" className="header-search"/>
		  <SelectHeader />
		</header>
	)
}

export default Header
