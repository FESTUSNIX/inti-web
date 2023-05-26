import React from 'react'
import HamburgerIcon from 'hamburger-react'

type Props = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Hamburger = ({ isOpen, setIsOpen }: Props) => {
	return (
		<div className='overflow-hidden text-neutral-50 z-50 relative'>
			<HamburgerIcon toggled={isOpen} toggle={setIsOpen} size={22} label='Show menu' rounded />
		</div>
	)
}

export default Hamburger
