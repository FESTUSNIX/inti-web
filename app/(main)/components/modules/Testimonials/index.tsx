import React from 'react'
import { getTestimonials } from '@/sanity/sanity-utils'
import Slider from './components/modules/Slider'

const Testimonials = async () => {
	const testimonials = await getTestimonials()

	return (
		<section className='my-32'>
			<Slider testimonials={testimonials} />
		</section>
	)
}

export default Testimonials
