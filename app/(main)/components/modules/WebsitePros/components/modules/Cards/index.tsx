import { getWebsiteProsCards } from '@/sanity/sanityUtils'
import React from 'react'
import Card from '../Card'

const Cards = async () => {
	const cards = await getWebsiteProsCards()

	return (
		<div className='relative flex shrink-0 flex-col gap-8 md:gap-16 lg:basis-1/2'>
			<div className='blob blob-website-pros left-0 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2'></div>
			{cards.map((card, index) => (
				<Card key={card._id} index={index} title={card.title} content={card.content} />
			))}
		</div>
	)
}

export default Cards
