import React from 'react'
import SectionHeading from '../../elements/SectionHeading'
import Accordion from './components/modules/Accordion'
import { getFAQCards } from '@/sanity/sanityUtils'
import Blob from '../../elements/Blob'

const FAQ = async () => {
	const cards = await getFAQCards()

	return (
		<section className='wrapper relative mb-24'>
			<SectionHeading className='priority:mb-8' label='FAQ'>
				Często zadawane pytania
			</SectionHeading>

			<Accordion cards={cards} />

			<Blob
				variant='solid-blue'
				width='w-3/5'
				className='left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25'
			/>
		</section>
	)
}

export default FAQ
