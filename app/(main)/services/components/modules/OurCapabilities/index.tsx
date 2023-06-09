import Blob from '@/app/(main)/components/elements/Blob'
import clsx from 'clsx'
import React from 'react'

const capabilities = [
	'code a website',
	'create a logo',
	'create a unique design',
	'support internet explorer',
	'connect everything to a cms',
	'abandon you after finishing the project :(',
	'make the website responsive',
	'take all your money',
	'help you with branding',
	'stop listening to good music',
	'create stunning animations'
]

const OurCapabilities = () => {
	return (
		<section className='wrapper py-24 lg:py-36'>
			<div className='flex flex-col gap-24'>
				<div className='flex flex-wrap justify-between gap-4 font-heading text-lg font-bold uppercase tracking-[0.2em] text-neutral-300 md:text-xl lg:text-2xl'>
					<p className='text-gradient'>Potrafimy</p>
					<p className='ml-auto text-neutral-400 line-through'>Nie potrafimy</p>
				</div>

				<ul className='relative flex flex-col'>
					{capabilities.map((capability, index) => (
						<li
							key={capability}
							className={clsx(
								'group relative w-full border-b border-dark-700/20 py-12 first:border-t hover:after:scale-y-100',
								'after:absolute after:inset-0 after:-z-10 after:h-full after:w-full after:scale-y-0 after:bg-gradient-brand after:duration-300',
								index % 2 === 0 ? '' : 'py-6'
							)}>
							<h3
								className={clsx(
									'w-full md:w-3/5',
									'font-heading font-black uppercase !leading-[0.8] duration-300 group-hover:text-background',
									index % 2 === 0
										? 'text-4xl text-neutral-300 sm:text-5xl md:text-6xl lg:text-7xl'
										: 'ml-auto text-right text-3xl text-neutral-500 line-through sm:text-4xl xl:text-5xl'
								)}>
								{capability}
							</h3>
						</li>
					))}
					<Blob variant='radial-purple' width='w-80 md:w-96' className='top-0' />
					<Blob variant='linear-pink' width='w-96 md:w-1/2' className='right-1/4 top-1/2 opacity-50' />
					<Blob variant='linear-blue-to-purple' width='w-96 md:w-1/2' className='bottom-0 left-11 opacity-50' />
				</ul>
			</div>
		</section>
	)
}

export default OurCapabilities
