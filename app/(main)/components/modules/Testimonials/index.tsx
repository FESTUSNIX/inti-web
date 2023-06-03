import React from 'react'
import { getTestimonials } from '@/sanity/sanityUtils'
import Slider from './components/modules/Slider'

const Testimonials = async () => {
	const testimonials = await getTestimonials()

	return (
		<section className='relative my-48'>
			<Slider testimonials={testimonials} />
			<div className='blob blob-testimonials-1 left-1/2 top-0 h-full w-3/4 -translate-x-1/2'></div>
			<div className='blob blob-testimonials-2 left-0 top-0 h-full w-1/4	 -translate-x-1/2'></div>
			<div className='blob blob-testimonials-3 right-0 top-0 h-full w-1/4	 -translate-x-1/2'></div>
		</section>
	)
}

export default Testimonials
