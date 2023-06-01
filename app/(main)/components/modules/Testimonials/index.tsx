import React from 'react'
import { getTestimonials } from '@/sanity/sanityUtils'
import Slider from './components/modules/Slider'

const Testimonials = async () => {
	const testimonials = await getTestimonials()

	return (
		<section className='my-48'>
			<Slider testimonials={testimonials} />
		</section>
	)
}

export default Testimonials
