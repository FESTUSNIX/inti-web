'use client'

import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from '@/app/(main)/components/elements/Button'
import { FaSearch } from 'react-icons/fa'
import SubHeading from '@/app/(main)/components/elements/SubHeading'
import { Process } from '@/types/Services'

import 'swiper/css'
import 'swiper/css/pagination'
import PortableText from '@/app/(main)/components/elements/PortableText'
import InlineSVG from '@/app/(main)/components/elements/InlineSVG'

type Props = {
	data: Process
}

const TimelineMobile = ({ data }: Props) => {
	return (
		<div className='mt-4 w-full md:hidden'>
			<Swiper slidesPerView={1} modules={[Pagination]} pagination={true}>
				{data.map((step, index) => (
					<SwiperSlide key={index} className='group h-auto self-stretch'>
						<article className='flex h-full w-full flex-col border-y border-dark-700/20 py-12'>
							<div className='wrapper relative'>
								<div className='offer-heading-text-stroke absolute top-0 -z-10 -translate-y-1/2 text-6xl font-black text-transparent opacity-25'>
									0{index + 1}
								</div>

								<SubHeading>{step.title}</SubHeading>
								<PortableText content={step.text} className='mb-6 text-neutral-400' />

								{step.ctaButton && <Button theme='CTASecondary'>umów się na konsultację</Button>}
							</div>

							<div className='mt-auto flex items-center pl-8 pt-12 sm:max-sm:pr-12'>
								<div className='relative w-max rounded-full border border-dark-700/20 bg-dark-800/20 p-5'>
									<InlineSVG src={step.icon} width={30} height='auto' className='text-neutral-400 opacity-50' />
								</div>
								<div className='h-px min-w-[calc(100%-2.5rem)] bg-dark-700/20 group-last:hidden'></div>
							</div>
						</article>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default TimelineMobile
