'use client'

import React, { useState } from 'react'
import ( Hamburger as HamburgerIcon) from 'hamburger-react'

export const SideMenu = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<div className='flex flex-col'>
			<div className='-ml-3 overflow-hidden text-neutral-50'>
				<HamburgerIcon toggled={isOpen} toggle={setOpen} size={22} label='Show menu' rounded />
			</div>
		</div>
	)
}
