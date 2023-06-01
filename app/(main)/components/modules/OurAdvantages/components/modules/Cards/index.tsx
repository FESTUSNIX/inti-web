import React from 'react'
import Card from '../Card'
import { getOurAdvantagesCards } from '@/sanity/sanityUtils'

const Cards = async () => {
	const cards = await getOurAdvantagesCards()

	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-8'>
			{cards.map((card, index) => (
				<Card key={index} title={card.title} content={card.content} />
			))}
		</div>
	)
}

export default Cards
