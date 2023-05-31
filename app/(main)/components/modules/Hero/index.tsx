import React from 'react'
import Button from '../../elements/Button'

const Hero = () => {
	return (
		<header className='wrapper mb-4 mt-24 flex min-h-[calc(100vh-84px)] flex-col items-center pb-16 md:flex-row md:gap-16 md:pb-24'>
			<div className='max-w-full basis-3/5'>
				<h1 className='mb-4 max-w-full font-heading text-4xl font-black capitalize text-neutral-50 sm:text-5xl lg:text-6xl lg:leading-tight'>
					<span>Wyprzedź&nbsp;</span>
					<span className='inline-block'>konkurencje i&nbsp;</span>
					<span className='bg-gradient-brand bg-clip-text text-transparent'>stań&nbsp;</span>
					<span className='inline-block'>się&nbsp;</span>
					<span className='inline-block'>bardziej&nbsp;</span>
					<span className='bg-gradient-brand bg-clip-text text-transparent'>rozpoznawalny!</span>
				</h1>

				<h2 className='mb-8 max-w-xl text-lg text-neutral-400 lg:text-2xl'>
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

			<div className='mt-4 flex h-72 w-full basis-2/5 items-center justify-center bg-neutral-300 text-dark-900'>
				placeholder for image
			</div>
		</header>
	)
}

export default Hero
