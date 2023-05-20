import React from 'react'

type Props = {}

const TimeMenu = (props: Props) => {
	return (
		<div className='absolute -bottom-2 right-0 z-20 max-h-64 translate-y-full overflow-y-auto overflow-x-hidden rounded-lg border border-dark-700/20 bg-dark-800/20'>
			<div className='flex flex-col text-neutral-400'>
				{Array(12)
					.fill(0)
					.map((_, index) => (
						<div key={index} className='cursor-pointer select-none duration-300 hover:bg-dark-800/40'>
							<div className='px-4 py-2'>
								<span>{index < 9 ? 0 : ''}</span>
								<span>{index + 1}</span>
								<span>:00</span>
							</div>
						</div>
					))}
			</div>
		</div>
	)
}

export default TimeMenu
 "feat: concept of time picker component"