'use client'

import React, { useState } from 'react'
import { FaChevronDown, FaRegClock } from 'react-icons/fa'
import TimeMenu from '../TimeMenu'

type Props = {}

const Label = ({}: Props) => {
	const [active, setActive] = useState(false)
	const [value, setValue] = useState('')

	return (
		<div
			className={`relative flex cursor-pointer overflow-hidden rounded-xl border bg-dark-800/20 px-6 text-neutral-400 duration-200 ${
				active ? 'border-dark-700/60' : 'border-dark-700/20'
			}`}
			onClick={() => setActive(prevValue => !prevValue)}>
			<div className='py-4 pr-3 opacity-75'>
				<FaRegClock size={18} />
			</div>

			<div className='relative min-h-full'>
				<div
					className={`relative block duration-200 ${
						active ? 'top-1 origin-top-left scale-75 text-neutral-300' : 'top-1/2 -translate-y-1/2'
					}`}>
					Start with
				</div>

				<div
					className={`absolute bottom-1 text-lg text-neutral-100 duration-200 ${
						active ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-0'
					}`}>
					<span>00</span>
					<span>:</span>
					<span>00</span>
				</div>
			</div>

			<div className='ml-auto py-4 pl-8 opacity-50'>
				<FaChevronDown size={18} />
			</div>
		</div>
	)
}

export default Label
