import React from 'react'
import SectionHeading from '../../elements/SectionHeading'
import Accordion from './components/modules/Accordion'
import { getFAQCards } from '@/sanity/sanityUtils'

const FAQ = async () => {
	const cards = await getFAQCards()

	return (
		<section className='wrapper mb-24'>
			<SectionHeading className='priority:mb-8'>Często zadawane pytania</SectionHeading>

			<Accordion cards={cards} />
		</section>
	)
}

export default FAQ
