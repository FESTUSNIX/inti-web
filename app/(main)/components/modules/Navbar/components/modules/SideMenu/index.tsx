'use client'

import React, { useEffect, useState } from 'react'
import Hamburger from './components/elements/Hamburger'
import Menu from './components/modules/Menu'
import { useScrollBlock } from '@/app/(main)/hooks/useScrollBlock'

export const SideMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [blockScroll, allowScroll] = useScrollBlock()

	useEffect(() => {
		isOpen ? blockScroll() : allowScroll()
	}, [isOpen, blockScroll, allowScroll])

	return (
		<div className='md:hidden'>
			<Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />

			{isOpen && <Menu setIsOpen={setIsOpen} />}
		</div>
	)
}
