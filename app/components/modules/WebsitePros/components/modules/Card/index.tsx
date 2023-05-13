import React from 'react'

type Props = {
	index: number
}

const Card = ({ index }: Props) => {
	return (
		<article className='relative grow rounded-lg border border-dark-700/20 bg-dark-800/20 p-8'>
			<span className='absolute top-0 -translate-y-1/2'>
				<svg height='30' width='40'>
					<text
						x='50%'
						y='19'
						dominantBaseline='middle'
						textAnchor='middle'
						fill='none'
						className='stroke-neutral-400 text-4xl font-black tracking-wide'>
						0{index + 1}
					</text>
				</svg>
			</span>

			<h3 className='mb-2 text-xl font-semibold text-neutral-300'>Lorem ipsum</h3>
			<p className='text-neutral-400'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, necessitatibus! Rem ratione numquam in
				commodi.
			</p>
		</article>
	)
}

export default Card
