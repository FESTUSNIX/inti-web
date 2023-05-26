import clsx from 'clsx'
import React from 'react'

type Props = {
	index: number
}

const Card = ({ index }: Props) => {
	return (
		<article
			className={clsx(
				'relative grow rounded-lg border border-dark-700/20 bg-dark-800/20 p-8 md:max-w-md xl:max-w-lg',
				index === 1 ? 'md:ml-16 xl:ml-24' : 'md:mr-16 xl:mr-24'
			)}>
			<span className='absolute top-0 -translate-y-1/2'>
				<svg height='30' width='45'>
					<text
						x='50%'
						y='19'
						dominantBaseline='middle'
						textAnchor='middle'
						fill='none'
						className='stroke-neutral-400 text-4xl font-black tracking-wide lg:text-[40px]'>
						0{index + 1}
					</text>
				</svg>
			</span>

			<h3 className='mb-2 text-xl font-semibold text-neutral-300 lg:text-2xl'>Lorem ipsum</h3>
			<p className='text-neutral-400'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, necessitatibus! Rem ratione numquam in
				commodi.
			</p>
		</article>
	)
}

export default Card
