import Image from 'next/image'
import React, { useRef } from 'react'
import ChevronDown from '../../../assets/chevron-down.svg'

type Props = {
	index: number
	title: string
	answer: string
	activeRow: number
	setActiveRow: React.Dispatch<React.SetStateAction<number>>
}

const Row = ({ index, title, answer, activeRow, setActiveRow }: Props) => {
	const answerElement = useRef<HTMLDivElement>(null)
	const isActive = activeRow === index

	return (
		<button
			className={`group flex cursor-pointer flex-col overflow-hidden rounded-lg border border-dark-700/20 bg-dark-800/20 p-4 text-left duration-300 ${
				!isActive ? 'hover:bg-dark-800/40 active:bg-dark-800/30' : ''
			}`}
			onClick={() => setActiveRow(isActive ? -1 : index)}>
			<div className='flex w-full items-center justify-between'>
				<h3 className='font-semibold text-neutral-200 duration-300 group-hover:text-neutral-100 md:text-lg xl:text-xl'>
					{title}
				</h3>

				<div className={`p-3 duration-500 ${isActive ? 'rotate-180' : ''}`}>
					<Image
						src={ChevronDown}
						alt={isActive ? 'collapse row' : 'expand row'}
						className='opacity-80 invert duration-300 group-hover:opacity-100'
					/>
				</div>
			</div>
			<div
				className={`w-full overflow-hidden duration-500`}
				ref={answerElement}
				style={{ maxHeight: isActive ? answerElement?.current?.scrollHeight : 0 }}>
				<p className='pt-2 text-sm text-neutral-300 md:text-base'>{answer}</p>
			</div>
		</button>
	)
}

export default Row
