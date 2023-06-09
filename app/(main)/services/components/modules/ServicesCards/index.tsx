import Blob from '@/app/(main)/components/elements/Blob'
import PortableText from '@/app/(main)/components/elements/PortableText'
import { ServiceCards } from '@/types/Services'
import React from 'react'

type Props = {
	data: ServiceCards
}

const ServicesCards = ({ data }: Props) => {
	return (
		<section className='wrapper relative flex items-center justify-center py-12 xl:py-24'>
			<div className='flex flex-row flex-wrap 2xl:px-32'>
				{data.map((service, index) => (
					<div key={index} className='mx-auto w-full py-4 md:w-1/2 md:px-4 lg:w-1/3'>
						<div className='rounded-lg border border-dark-700/20 bg-dark-800/20 px-8 py-8 text-center'>
							<h2 className='mb-8 text-2xl font-semibold text-neutral-200'>{service.title}</h2>

							<PortableText content={service.text} className='text-neutral-400' />
						</div>
					</div>
				))}
			</div>
			<Blob
				variant='linear-blue-to-purple'
				width='w-1/2'
				height='h-48'
				className='left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
			/>
		</section>
	)
}

export default ServicesCards
