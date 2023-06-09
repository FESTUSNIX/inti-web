'use client'

import Image from 'next/image'
import React from 'react'
import lightbulb from '../../../assets/lightbulb-hand-1.png'
import Parallax from '@/app/(main)/components/elements/Parallax'
import MouseParallax from '@/app/(main)/components/elements/MouseParallax'

const Hero = () => {
	return (
		<header className='relative flex min-h-screen flex-col items-center' style={{ clipPath: 'inset(0)' }}>
			<div className='wrapper'>
				<div className='flex flex-col items-center gap-4 pt-36 text-center md:pt-48'>
					<h1 className='text-gradient relative z-20 max-w-md px-4 font-heading text-xl font-bold uppercase md:px-8 md:text-2xl xl:text-3xl'>
						lorem ipsum dolor
					</h1>
					<div className='relative text-7xl font-black uppercase sm:text-8xl md:text-9xl xl:text-[168px]'>
						<div className='pointer-events-none -z-10 text-neutral-50' aria-hidden='true'>
							nasza
							<br /> oferta
						</div>
						<h2 className='offer-heading-text-stroke absolute top-1/2 z-10 -translate-y-1/2 text-transparent'>
							nasza
							<br /> oferta
						</h2>
						<div className='blob blob-hero-image bottom-0 aspect-square w-1/2'></div>
						<div className='blob blob-portfolio-text right-0 top-0 aspect-square w-1/2'></div>
					</div>
				</div>
				<MouseParallax isAbsolutelyPositioned enableOnTouchDevice strength={-0.015}>
					<Parallax isAbsolutelyPositioned lerpEase={0.15} strength={-0.15}>
						<Image
							src={lightbulb}
							alt=''
							draggable={false}
							priority
							className='absolute bottom-0 left-1/2 z-0 aspect-[360/893] h-auto max-w-[70%] -translate-x-1/2 translate-y-1/4 opacity-75 md:max-w-none'
						/>
					</Parallax>
				</MouseParallax>
			</div>
		</header>
	)
}

export default Hero
