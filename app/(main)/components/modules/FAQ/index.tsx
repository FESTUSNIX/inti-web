import React from 'react'
import SectionHeading from '../../elements/SectionHeading'
import Accordion from './components/modules/Accordion'
import { getFAQCards } from '@/sanity/sanityUtils'

const FAQ = async () => {
	const cards = await getFAQCards()

	return (
		<section className='wrapper relative mb-24'>
			<SectionHeading className='priority:mb-8' label='FAQ'>
				Często zadawane pytania
			</SectionHeading>

			<Accordion cards={cards} />

			<div className='blob blob-faq-1 left-1/2 top-1/2 aspect-square w-3/5 -translate-x-1/2 -translate-y-1/2'></div>
		</section>
	)
}

export default FAQ
