'use client'

import React from 'react'
import Card from './components/modules/Card'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import useResponsive from '@/app/hooks/useResponsive'

const Testimonials = () => {
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
		<section className='my-32'>
			<Swiper
				spaceBetween={isMD ? 28 : 10}
				slidesPerView={responsiveSlidesPerView()}
				loop={true}
				navigation={true}
				grabCursor={true}
				centeredSlides={true}>
				{Array(8)
					.fill(0)
					.map((_, index) => (
						<SwiperSlide key={index}>{({ isActive }) => <Card isActive={isActive} index={index} />}</SwiperSlide>
					))}
			</Swiper>
		</section>
	)
}

export default Testimonials
