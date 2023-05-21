import React from 'react'
import { FaChevronDown, FaRegClock } from 'react-icons/fa'

type Props = {
	active: boolean
	setActive: React.Dispatch<React.SetStateAction<boolean>>
	value: { hour: string; minutes: string }
	label: string
}

const Label = ({ active, setActive, value, label }: Props) => {
	return (
		<div
			tabIndex={0}
			className={`group relative flex cursor-pointer overflow-hidden rounded-xl border bg-dark-800/20 px-6 text-neutral-400 duration-200 ${
				active ? 'border-dark-700/60' : 'border-dark-700/20'
			}`}
			onClick={() => setActive(prevValue => !prevValue)}>
			<div className='py-4 pr-4 opacity-50'>
				<FaRegClock size={18} />
			</div>

			<div className='relative min-h-full'>
				<div
					className={`relative block duration-200 ${
						active || value.hour ? 'top-1 origin-top-left scale-75 text-neutral-300' : 'top-1/2 -translate-y-1/2'
					} ${value ? 'text-neutral-400' : ''}`}>
					{label}
				</div>

				<div
					className={`absolute bottom-1 text-lg text-neutral-100 duration-200 ${
						active || value.hour ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-0'
					}`}>
					{value.hour ? `${value.hour}:${value.minutes}` : ''}
				</div>
			</div>

			<div className='ml-auto py-4 pl-8 opacity-50'>
				<FaChevronDown size={18} />
			</div>
		</div>
	)
}

export default Label
