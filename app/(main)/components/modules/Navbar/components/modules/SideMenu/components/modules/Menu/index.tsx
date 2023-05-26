import Link from 'next/link'
import React from 'react'

const Menu = () => {
	return (
		<div className='fixed inset-0 bg-dark-800/20 backdrop-blur-md flex justify-center items-center z-40'>
			<ul className='flex flex-col gap-4 '>
				{[
					['oferta', '/offer'],
					['portfolio', '/portfolio'],
					['o nas', '/about-us'],
					['kontakt', '/contact']
				].map(([displayName, link]: string[], index) => (
					<li key={link}>
						<Link
							href={link}
							className='relative group flex items-center uppercase text-4xl w-max font-black px-4 cursor-pointer'>
							<div className='absolute left-0 w-full h-2 top-1/2 -translate-y-1/2 bg-gradient-brand duration-300 scale-x-0 origin-right group-hover:scale-x-100'></div>
							<span className='text-neutral-400 mr-4 h-full'>
								<svg height='30' width='40'>
									<text
										x='50%'
										y='19'
										dominantBaseline='middle'
										textAnchor='middle'
										fill='none'
										className='stroke-neutral-400'>
										0{index + 1}
									</text>
								</svg>
							</span>
							<span className='text-neutral-200'>{displayName}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Menu
