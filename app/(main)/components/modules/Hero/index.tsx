import React from 'react'
import Button from '../../elements/Button'
import heroImg from './assets/hero.png'
import Image from 'next/image'

const Hero = () => {
	return (
		<header className='wrapper mb-4 mt-24 flex flex-col items-center gap-16 pb-16 max-lg:pt-24 md:min-h-[calc(100vh-84px)] md:flex-row md:pb-24'>
			<div className='z-20 max-w-full basis-3/4 2xl:basis-3/5'>
				<h1 className='mb-4 max-w-full font-heading text-4xl font-black capitalize text-neutral-50 sm:text-5xl lg:text-6xl lg:leading-tight'>
					<span>Wyprzedź&nbsp;</span>
					<span className='inline-block'>konkurencje i&nbsp;</span>
					<span className='bg-gradient-brand bg-clip-text text-transparent'>stań&nbsp;</span>
					<span className='inline-block'>się&nbsp;</span>
					<span className='inline-block'>bardziej&nbsp;</span>
					<span className='bg-gradient-brand bg-clip-text text-transparent'>rozpoznawalny!</span>
				</h1>

				<h2 className='mb-8 max-w-xl text-lg text-neutral-400 lg:text-xl'>
					Docieraj do większej ilości klientów dzięki dedykowanej stronie internetowej.
				</h2>

				<div className='flex grow items-center gap-4 max-md:flex-wrap md:flex-row '>
					<Button className='max-sm:grow' theme='CTA'>
						Porozmawiajmy!
					</Button>
					<Button theme='CTASecondary' className='max-sm:grow'>
						zobacz nasze prace
					</Button>
				</div>
			</div>

			<div className='relative z-10 mt-4 flex w-full basis-1/4 2xl:basis-2/5'>
				<Image
					src={heroImg}
					alt='us coding'
					priority
					className='relative top-1/2 z-10 scale-125 md:absolute md:left-0 md:min-w-[340px] md:-translate-y-1/2 md:scale-150 2xl:scale-125'
				/>
				<div className='blob blob-hero-image z-0 aspect-square min-h-full min-w-full scale-150 md:-translate-y-1/2 md:scale-[5] 2xl:scale-150'></div>
			</div>
		</header>
	)
}

export default Hero
