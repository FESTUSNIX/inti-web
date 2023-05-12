import React from 'react'
import { Background } from './components/elements/Background'
import { SideMenu } from './components/modules/SideMenu'

const Navbar = () => {
	return (
		<nav className='fixed top-0 left-0 z-50 w-full py-5'>
			<Background />

			<div className='flex items-center justify-between wrapper'>
				<h2 className='text-neutral-50 font-heading font-bold text-3xl'>IntiWeb</h2>

				<SideMenu />
			</div>
		</nav>
	)
}

export default Navbar