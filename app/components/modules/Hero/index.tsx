import React from 'react'
import Button from '../../elements/Button'

const Hero = () => {
	return (
		<header className='wrapper mb-24 pt-16'>
			<h1 className='mb-4 max-w-full font-heading text-5xl font-black text-neutral-50'>
				<span>Sięgaj po</span>
				<span className='bg-gradient-brand bg-clip-text text-transparent'>&nbsp;więcej&nbsp;</span>
				<span className='inline-block'>razem z&nbsp;</span>
				<span className='bg-gradient-brand bg-clip-text text-transparent'>nami.</span>
			</h1>

			<h2 className='mb-8 text-neutral-300'>
				Docieraj do większej ilości klientów dzięki dedykowanej stronie internetowej.
			</h2>

			<div className='flex grow flex-wrap items-center gap-4'>
				<Button className='max-sm:grow' theme='CTA'>
					Porozmawiajmy
				</Button>
				<Button theme='CTASecondary' className='max-sm:grow'>
					zobacz nasze prace
				</Button>
			</div>

			<div className='mt-4 flex h-72 w-full items-center justify-center bg-neutral-300 text-dark-900'>
				placeholder for image
			</div>
		</header>
	)
}

export default Hero
