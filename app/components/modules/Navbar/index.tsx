import React from 'react'
import { Background } from './components/elements/Background'
import { SideMenu } from './components/modules/SideMenu'
import Link from 'next/link'
import LinkList from './components/modules/LinkList'

const Navbar = () => {
	return (
		<nav className='fixed left-0 top-0 z-50 w-full py-5'>
			<Background />

			<div className='wrapper flex items-center justify-between'>
				<Link href={'/'}>
					<h2 className='font-heading text-3xl font-bold text-neutral-50'>IntiWeb</h2>
				</Link>

				<LinkList />

				<SideMenu />
			</div>
		</nav>
	)
}

export default Navbar
