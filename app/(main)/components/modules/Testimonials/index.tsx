import React from 'react'
import { getTestimonials } from '@/sanity/sanityUtils'
import Slider from './components/modules/Slider'
import Blob from '../../elements/Blob'

const Testimonials = async () => {
	const testimonials = await getTestimonials()

	return (
		<section className='relative my-48'>
			<Slider testimonials={testimonials} />
			<Blob variant='linear-blue-to-purple' width='w-1/4' height='h-full' className='left-0 top-0 -translate-x-1/2' />
			<Blob
				variant='linear-purple-to-dark-purple'
				width='w-3/4'
				height='h-full'
				className='left-1/2 top-0 -translate-x-1/2 opacity-50'
			/>
			<Blob variant='linear-pink' width='w-1/4' height='h-full' className='right-0 top-0 translate-x-1/2 opacity-50' />
		</section>
	)
}

export default Testimonials
