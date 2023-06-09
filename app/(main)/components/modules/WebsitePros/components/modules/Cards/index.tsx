import { getWebsiteProsCards } from '@/sanity/sanityUtils'
import React from 'react'
import Card from '../Card'
import Blob from '@/app/(main)/components/elements/Blob'

const Cards = async () => {
	const cards = await getWebsiteProsCards()

	return (
		<div className='relative flex shrink-0 flex-col gap-8 md:gap-16 lg:basis-1/2'>
			<Blob
				variant='solid-blue'
				customBackground='linear-gradient(155deg, rgb(67, 20, 73, 1) 8%, rgb(43, 17, 69, 1) 70%)'
				width='w-full'
				height='h-full'
				className='left-0 top-1/2 -translate-x-1/2 -translate-y-1/2'
			/>

			{cards.map((card, index) => (
				<Card key={card._id} index={index} title={card.title} content={card.content} />
			))}
		</div>
	)
}

export default Cards
