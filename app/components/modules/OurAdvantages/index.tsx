import React from 'react'
import SectionHeading from '../../elements/SectionHeading'
import Card from './components/modules/Card'

const OurAdvantages = () => {
	return (
		<section className='section-margin'>
			<SectionHeading className='mb-12 text-center'>Wszystko czego potrzebuje twoja firma</SectionHeading>

			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-8'>
				{Array(6)
					.fill(0)
					.map((_, index) => (
						<Card key={index} index={index} />
					))}
			</div>
		</section>
	)
}

export default OurAdvantages
