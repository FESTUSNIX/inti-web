'use client'

import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from '@/app/(main)/components/elements/Button'
import { FaSearch } from 'react-icons/fa'
import SubHeading from '@/app/(main)/components/elements/SubHeading'
import useResponsive from '@/app/(main)/hooks/useResponsive'

import 'swiper/css'
import 'swiper/css/pagination'

type Props = {}

const TimelineMobile = ({}: Props) => {
	const { isMD } = useResponsive()

	if (isMD) return null
	return (
		<div className='mt-4 w-full'>
			<Swiper slidesPerView={1} modules={[Pagination]} pagination={true}>
				{Array(4)
					.fill(0)
					.map((step, index) => (
						<SwiperSlide key={index} className='group'>
							<article className='w-full border-y border-dark-700/20 py-12'>
								<div className='wrapper relative'>
									<div className='offer-heading-text-stroke absolute top-0 -z-10 -translate-y-1/2 text-6xl font-black text-transparent opacity-25'>
										0{index + 1}
									</div>

									<SubHeading>Lorem ipsum dolor</SubHeading>
									<p className='mb-6 text-neutral-400'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
										aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
										inceptos himenaeos.
									</p>

									<Button theme='CTASecondary'>umów się na konsultację</Button>
								</div>

								<div className='mt-12 flex items-center pl-8 sm:max-sm:pr-12'>
									<div className='relative w-max rounded-full border border-dark-700/20 bg-dark-800/20 p-5'>
										<FaSearch size={34} className='text-neutral-50 opacity-25' />
									</div>
									<div className='h-px min-w-[calc(100%-2.75rem)] bg-dark-700/20 group-last:hidden'></div>
								</div>
							</article>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	)
}

export default TimelineMobile
