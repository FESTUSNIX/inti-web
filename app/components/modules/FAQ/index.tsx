import React from 'react'
import SectionHeading from '../../elements/SectionHeading'
import Accordion from './components/modules/Accordion'

const FAQ = () => {
	return (
		<section className='wrapper mb-24'>
			<SectionHeading className='priority:mb-8'>Często zadawane pytania</SectionHeading>

			<Accordion />
		</section>
	)
}

export default FAQ
