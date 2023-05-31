import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaFacebook, FaTiktok, FaTwitter } from 'react-icons/fa'

const SocialLinks = () => {
	return (
		<div className='mt-8 flex max-sm:justify-between sm:gap-8 lg:mt-auto'>
			<Link
				aria-label='Our Instagram'
				href={''}
				className='rounded-full border border-transparent p-3 text-neutral-400 duration-300 hover:border-dark-700/20 hover:bg-dark-800/20'>
				<FaInstagram size={24} />
			</Link>
			<Link
				aria-label='Our Facebook'
				href={''}
				className='rounded-full border border-transparent p-3 text-neutral-400 duration-300 hover:border-dark-700/20 hover:bg-dark-800/20'>
				<FaFacebook size={24} />
			</Link>
			<Link
				aria-label='Our Twitter'
				href={''}
				className='rounded-full border border-transparent p-3 text-neutral-400 duration-300 hover:border-dark-700/20 hover:bg-dark-800/20'>
				<FaTwitter size={24} />
			</Link>
			<Link
				aria-label='Our TikTok'
				href={''}
				className='rounded-full border border-transparent p-3 text-neutral-400 duration-300 hover:border-dark-700/20 hover:bg-dark-800/20'>
				<FaTiktok size={24} />
			</Link>
		</div>
	)
}

export default SocialLinks
