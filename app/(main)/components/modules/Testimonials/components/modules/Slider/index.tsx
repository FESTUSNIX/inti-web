'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import useResponsive from '@/app/(main)/hooks/useResponsive'
import { Testimonial } from '@/types/Testimonial'
import Card from '../Card'
import 'swiper/css'

type Props = {
	testimonials: Testimonial[]
}

const Slider = ({ testimonials }: Props) => {
	const { isMD, isLG, isXL, is2XL, is3XL, is4XL } = useResponsive()

	const responsiveSlidesPerView = () => {
		let value = 1.3

		if (isMD) value = 1.5
		if (isLG) value = 2
		if (isXL) value = 2.25
		if (is2XL) value = 2.5
		if (is3XL) value = 3
		if (is4XL) value = 4

		return value
	}

	return (
		<Swiper
			spaceBetween={isMD ? 28 : 10}
			slidesPerView={responsiveSlidesPerView()}
			loop={true}
			navigation={true}
			grabCursor={true}
			centeredSlides={true}>
			{testimonials.map((testimonial, index) => (
				<SwiperSlide key={index}>
					{({ isActive }) => (
						<Card
							isActive={isActive}
							name={testimonial.name}
							position={testimonial.position}
							image={testimonial.image}
							content={testimonial.content}
						/>
					)}
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Slider
