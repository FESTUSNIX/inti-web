import React from 'react'
import SectionHeading from '../../elements/SectionHeading'
import Cards from './components/modules/Cards'

const OurAdvantages = () => {
	console.log('refresh')

	return (
		<section className='relative mb-32 border-y border-dark-700/20 bg-dark-800/20 py-12'>
			<div className='wrapper flex flex-col lg:gap-16'>
				<div className='mb-8 self-center text-center'>
					<SectionHeading label='nasze zalety'>Wszystko czego potrzebuje twoja firma</SectionHeading>
				</div>

				{/* @ts-expect-error Server Component */}
				<Cards />

				<div className='blob-our-advantages-1 blob left-2/4 top-0 -translate-x-1/2' />
				<div className='blob blob-our-advantages-2 absolute bottom-0 right-0 h-1/2 w-1/4 -translate-x-1/2 opacity-30' />
			</div>
		</section>
	)
}

export default OurAdvantages
