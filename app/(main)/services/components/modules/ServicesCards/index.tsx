import Blob from '@/app/(main)/components/elements/Blob'
import React from 'react'

const description =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, totam blanditiis aut dicta alias hic eumomnis ratione sint repellat quo, ullam quae aliquam. Minus sint mollitia animi adipisci amet!'

const services = [
	{
		id: 'websites',
		title: 'Lorem ipsum dolor',
		label: 'Strony internetowe',
		description
	},
	{
		id: 'redesign',
		title: 'Lorem ipsum dolor',
		label: 'Odświeżenie strony',
		description
	},
	{
		id: 'cms-system',
		title: 'Lorem ipsum dolor',
		label: 'System CMS',
		description
	}
]

const ServicesCards = () => {
	return (
		<section className='wrapper relative flex items-center justify-center py-12 xl:py-24'>
			<div className='flex flex-row flex-wrap 2xl:px-32'>
				{services.map((service, index) => (
					<div key={index} className='mx-auto w-full py-4 md:w-1/2 md:px-4 lg:w-1/3'>
						<div className='rounded-lg border border-dark-700/20 bg-dark-800/20 px-8 py-8 text-center'>
							<h2 className='mb-8 text-2xl font-semibold text-neutral-200'>{service.title}</h2>
							<p className='text-neutral-400'>{service.description}</p>
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
