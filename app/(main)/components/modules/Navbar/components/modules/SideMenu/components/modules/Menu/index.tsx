import { pageLinks } from '@/app/(main)/components/modules/Navbar/constants/pageLinks'
import Link from 'next/link'
import React from 'react'

type Props = {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({ setIsOpen }: Props) => {
	return (
		<div className='fixed inset-0 z-40 flex items-center justify-center bg-dark-800/20 backdrop-blur-md'>
			<ul className='flex flex-col gap-4 '>
				{pageLinks.map(([displayName, link]: string[], index) => (
					<li key={link} onClick={() => setIsOpen(false)}>
						<Link
							href={link}
							className='group relative flex w-max cursor-pointer items-center px-4 text-4xl font-black uppercase'>
							<div className='pointer-events-none absolute left-0 top-1/2 h-2 w-full origin-right -translate-y-1/2 scale-x-0 bg-gradient-brand duration-300 group-hover:scale-x-100'></div>
							<span className='mr-4 h-full text-neutral-400'>
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
