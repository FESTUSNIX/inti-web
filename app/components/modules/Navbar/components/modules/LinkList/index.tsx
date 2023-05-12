import Link from 'next/link'
import React from 'react'

const LinkList = () => {
	return (
		<ul className='hidden items-center gap-4 md:flex lg:gap-8 xl:gap-12'>
			{[
				['oferta', '/offer'],
				['portfolio', '/portfolio'],
				['o nas', '/about-us'],
				['kontakt', '/contact']
			].map(([displayName, link]: string[]) => (
				<li key={link} className='group relative cursor-pointer'>
					<Link
						href={link}
						className='group-last:gradient-wave relative flex w-max items-center rounded-lg px-4 py-2 text-lg font-black uppercase text-neutral-200 group-last:bg-gradient-brand'>
						{displayName}
					</Link>
					<div className='absolute left-0 top-1/2 h-1 w-full origin-right -translate-y-1/2 scale-x-0 bg-gradient-brand duration-300 group-last:hidden group-hover:scale-x-100'></div>
				</li>
			))}
		</ul>
	)
}

export default LinkList
