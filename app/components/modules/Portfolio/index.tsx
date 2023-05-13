'use client'

import React, { useEffect, useRef } from 'react'
import SectionHeading from '../../elements/SectionHeading'
import Button from '../../elements/Button'
import Image from 'next/image'
import LaptopImage from './assets/laptop-image.png'
import TabletImage from './assets/tablet-image.png'
import PhoneImage from './assets/phone-image.png'
import { useScrollPosition } from '@/app/hooks/useScrollPosition'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

const Portfolio = () => {
	const scrollPos = useScrollPosition()
	const sectionEl = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!sectionEl?.current) return

		if (scrollPos >= sectionEl.current.scrollHeight) {
			console.log(scrollPos, sectionEl.current.scrollHeight)
		}
	}, [scrollPos])

	// console.log(sectionEl)

	return (
		<section className='relative flex'>
			<div className='wrapper fixed inset-0'>
				<div className='left-0 top-0 flex h-screen w-2/5 flex-col justify-center pt-24'>
					<SectionHeading>Zobacz wybrane realizacje naszych stron</SectionHeading>

					<p className='mb-4 text-neutral-400'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum placeat aut, accusantium quaerat nesciunt
						veniam culpa tenetur, tempore voluptas, in eos aperiam fugit fugiat ab?
					</p>

					<Button className='w-max'>zobacz więcej</Button>
				</div>
			</div>

			<ParallaxProvider>
				<div className='ml-[40%] flex w-3/5 flex-col' ref={sectionEl}>
					{/* <Parallax speed={-30}>
						<div className='relative mt-[40vh] h-screen'>
							<Image src={LaptopImage} alt='' className='absolute bottom-[-20vh] left-0 duration-200 ease-out' />
						</div>
					</Parallax>

					<Parallax speed={15}>
						<div className='relative mt-[40vh] h-screen'>
							<Image src={TabletImage} alt='' className='absolute bottom-[-90vh] left-0 duration-200 ease-out' />
						</div>
					</Parallax> */}

					<div className='relative mt-[40vh] h-screen'>
						<Parallax speed={10}>
							<Image
								src={PhoneImage}
								alt=''
								className='absolute bottom-[-90vh] left-0 scale-[0.6] duration-200 ease-out'
							/>
						</Parallax>
						<Parallax speed={15}>
							<Image
								src={TabletImage}
								alt=''
								className='absolute bottom-[-100vh] right-[-2vw] scale-75 duration-200 ease-out'
							/>
						</Parallax>

						<Parallax speed={30}>
							<Image
								src={PhoneImage}
								alt=''
								className='absolute bottom-[-120vh] left-0 scale-50 duration-200 ease-out'
							/>
						</Parallax>
					</div>
				</div>
			</ParallaxProvider>
		</section>
	)
}

export default Portfolio
