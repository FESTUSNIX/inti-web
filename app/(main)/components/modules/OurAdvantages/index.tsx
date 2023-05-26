'use client'

import React from 'react'
import SectionHeading from '../../elements/SectionHeading'
import Cards from './components/modules/Cards'

const OurAdvantages = () => {
	return (
		<section className='relative mb-32 border-y border-dark-700/20 bg-dark-800/20 py-12'>
			<div className='wrapper flex flex-col lg:gap-16'>
				<SectionHeading className='mb-8 self-center max-lg:text-center'>
					Wszystko czego potrzebuje twoja firma
				</SectionHeading>

				{/* @ts-expect-error Server Component */}
				<Cards />

				<div className='gradient-blob-1 absolute left-1/2 top-0 -z-10 -translate-x-1/2'></div>
			</div>
		</section>
	)
}

export default OurAdvantages
