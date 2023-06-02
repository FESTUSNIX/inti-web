import React from 'react'
import Marquee from 'react-fast-marquee'

const Header = () => {
	return (
		<header className='flex flex-col pt-24'>
			<div className='wrapper mt-16 flex justify-center text-center md:mt-32 lg:mt-32'>
				<h1 className='mb-6 font-heading text-4xl font-black !leading-tight text-neutral-100 sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl'>
					Było nas <span className='text-gradient'>dwóch, </span>w każdym z nas inna krew, ale jeden przyświecał
					<span className='text-gradient'> nam cel</span>
				</h1>
			</div>

			<div className='my-32 lg:my-64'>
				<Marquee autoFill className='overflow-y-hidden'>
					<p className='min-w-max font-heading text-6xl font-black uppercase text-neutral-100  opacity-5 md:text-7xl lg:text-8xl'>
						tworzymy z pasją&nbsp;
					</p>
				</Marquee>

				<Marquee direction='right' autoFill className='overflow-y-hidden'>
					<p className='min-w-max font-heading text-6xl font-black uppercase text-neutral-100 opacity-5 md:text-7xl lg:text-8xl'>
						stawiamy na dobrą atmosferę&nbsp;
					</p>
				</Marquee>
			</div>
		</header>
	)
}

export default Header
