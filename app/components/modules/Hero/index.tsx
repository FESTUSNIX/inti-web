import React from 'react'
import Button from '../../elements/Button'

const Hero = () => {
	return (
		<header className='wrapper mb-24 flex flex-col pt-16 md:mb-48 md:flex-row md:gap-16 md:pt-32 lg:mb-48 lg:pt-32 xl:mb-64'>
			<div className='basis-3/5'>
				<h1 className='mb-4 max-w-full font-heading text-5xl font-black text-neutral-50 lg:text-7xl'>
					<span>Sięgaj&nbsp;</span>
					<span className='inline-block'>po&nbsp;</span>
					<span className='bg-gradient-brand bg-clip-text text-transparent'>więcej&nbsp;</span>
					<span className='inline-block'>razem&nbsp;</span>
					<span className='inline-block'>z&nbsp;</span>
					<span className='bg-gradient-brand bg-clip-text text-transparent'>nami.</span>
				</h1>

				<h2 className='mb-8 max-w-xl text-lg text-neutral-400 lg:text-2xl'>
					Docieraj do większej ilości klientów dzięki dedykowanej stronie internetowej.
				</h2>

				<div className='flex grow items-center gap-4 max-md:flex-wrap md:flex-row '>
					<Button className='max-sm:grow' theme='CTA'>
						Porozmawiajmy
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
