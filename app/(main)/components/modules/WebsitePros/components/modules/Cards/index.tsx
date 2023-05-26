import { getWebsiteProsCards } from '@/sanity/sanity-utils'
import React from 'react'
import Card from '../Card'

const Cards = async () => {
	const cards = await getWebsiteProsCards()

	return (
		<div className='flex shrink-0 flex-col gap-8 md:gap-16 lg:basis-1/2'>
			{cards.map((card, index) => (
				<Card key={card._id} index={index} title={card.title} content={card.content} />
			))}
		</div>
	)
}

export default Cards
