'use client'

import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

type Props = {
	value: { hour: string; minutes: string }
	setValue: React.Dispatch<
		React.SetStateAction<{
			hour: string
			minutes: string
		}>
	>
	active: boolean
	setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const TimeMenu = ({ value, setValue, active, setActive }: Props) => {
	const generateHours = (start: number, stop: number, step: number = 1) => {
		const range = Array.from({ length: (stop - start) / step + 1 }, (_, index) => start + index * step)

		const formatedRange = range.map(item => (item <= 9 ? `0${item}` : `${item}`))

		return formatedRange
	}
	const availableHours = generateHours(6, 22, 1)

	return (
		<OutsideClickHandler onOutsideClick={() => setActive(false)}>
			<div
				className={`overflow-y-overlay thin-scrollbar absolute -bottom-2 right-0 z-20 flex max-h-64 origin-top translate-y-full items-start overflow-x-hidden rounded-lg border border-dark-700/20 bg-dark-800/20 duration-150 ${
					active ? 'scale-y-100' : 'scale-y-0'
				}`}>
				<div className='flex flex-col text-neutral-400'>
					{availableHours.map(hour => (
						<button
							key={hour}
							className={`cursor-pointer select-none py-2 pl-4 pr-6 duration-300 hover:bg-dark-800/40 ${
								value?.hour === hour ? 'bg-dark-800/60 text-neutral-300' : ''
							}`}
							onClick={() => {
								setValue(prevValue => ({ ...prevValue, hour: hour }))
								setActive(false)
							}}>
							{hour}
						</button>
					))}
				</div>
				<div className='sticky top-0 flex flex-col text-neutral-400'>
					{['00', '30'].map(minutes => (
						<button
							key={minutes}
							className={`cursor-pointer select-none py-2 pl-4 pr-6 duration-300 hover:bg-dark-800/40 ${
								value?.minutes === minutes ? 'bg-dark-800/60 text-neutral-300' : ''
							}`}
							onClick={() => {
								setValue(prevValue => ({ ...prevValue, minutes: minutes }))
								setActive(false)
							}}>
							{minutes}
						</button>
					))}
				</div>
			</div>
		</OutsideClickHandler>
	)
}

export default TimeMenu
