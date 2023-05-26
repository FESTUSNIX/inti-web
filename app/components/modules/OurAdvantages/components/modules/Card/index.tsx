import React from 'react'

type Props = {
	index: number
}

const bgs = ['red', 'blue', 'yellowgreen', 'gray']

const Card = ({ index }: Props) => {
	

	return (
		<article
			className='relative grow overflow-hidden rounded-lg border border-dark-700/20 p-8 opacity-50'
			style={{ backgroundColor: bgs[index] }}>
			<h3 className='mb-4 text-xl font-bold text-neutral-300 lg:text-2xl'>Lorem ipsum dolor</h3>
			<p className='text-neutral-400'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum placeat aut, accusantium quaerat nesciunt veniam
				culpa tenetur, tempore voluptas, in eos aperiam fugit fugiat ab?
			</p>
		</article>
	)
}

export default Card
