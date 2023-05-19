import React from 'react'

type Props = {
	isActive: boolean
	index: number
}

const Card = ({ isActive, index }: Props) => {
	return (
		<div
			className={`flex h-full select-none flex-col gap-4 rounded-lg border border-dark-700/60 bg-dark-800/20 p-4 pb-12 duration-300 ${
				isActive ? 'scale-100' : 'scale-90 opacity-25 blur-[2px]'
			}`}>
			<div className='flex items-center gap-4'>
				<div className='aspect-square w-12 rounded-full bg-gradient-brand'></div>
				<div className='grow'>
					<p className='font-semibold text-neutral-200'>{index}</p>
					<p className='text-sm text-neutral-300'>
						CEO of
						<span className='font-bold'> Apple</span>
					</p>
				</div>
			</div>
			<blockquote className='text-neutral-200'>
				{Array(index + 1)
					.fill(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`)
					.map((item, index) => (
						<span key={index}>{item}</span>
					))}
			</blockquote>
		</div>
	)
}

export default Card
