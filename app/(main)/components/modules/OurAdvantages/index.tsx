import React from 'react'
import SectionHeading from '../../elements/SectionHeading'
import Cards from './components/modules/Cards'
import Blob from '../../elements/Blob'

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

				<Blob variant='solid-purple' width='w-64' height='h-64' className='left-2/4 top-0 -translate-x-1/2' />
				<Blob
					variant='solid-blue'
					width='w-1/4'
					height='h-1/2'
					className='bottom-0 right-0 -translate-x-1/2 opacity-50'
				/>
			</div>
		</section>
	)
}

export default OurAdvantages
