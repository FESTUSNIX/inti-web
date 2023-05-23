import React from 'react'
import Link from 'next/link'
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaTiktok, FaTwitter } from 'react-icons/fa'

const ContactInformation = () => {
	return (
		<div className='grow basis-1/2'>
			<h2 className='mb-16 text-5xl font-bold text-neutral-50 md:text-6xl 2xl:text-7xl'>
				Let&apos;s level up your&nbsp;
				<span className='inline-block'>brand&nbsp;</span>
				<span className='inline bg-gradient-brand bg-clip-text text-transparent'>together!</span>
			</h2>

			<div className='flex flex-col gap-4 md:flex-row lg:flex-col xl:mr-24 2xl:mr-48'>
				<div className='flex grow items-center gap-5 rounded-lg border border-dark-700/20 bg-dark-800/20 px-4 py-3 text-lg text-neutral-300'>
					<FaPhone size={22} />
					<span>+48 733 270 906</span>
				</div>
				<div className='flex grow items-center gap-5 rounded-lg border border-dark-700/20 bg-dark-800/20 px-4 py-3 text-lg text-neutral-300'>
					<FaEnvelope size={22} />
					<span>contact@intiweb.com</span>
				</div>
			</div>

			<div className='mt-8 flex max-sm:justify-between sm:gap-8'>
				<Link
					href={''}
					className='rounded-full border border-transparent p-3 text-neutral-400 duration-300 hover:border-dark-700/20 hover:bg-dark-800/20'>
					<FaInstagram size={24} />
				</Link>
				<Link
					href={''}
					className='rounded-full border border-transparent p-3 text-neutral-400 duration-300 hover:border-dark-700/20 hover:bg-dark-800/20'>
					<FaFacebook size={24} />
				</Link>
				<Link
					href={''}
					className='rounded-full border border-transparent p-3 text-neutral-400 duration-300 hover:border-dark-700/20 hover:bg-dark-800/20'>
					<FaTwitter size={24} />
				</Link>
				<Link
					href={''}
					className='rounded-full border border-transparent p-3 text-neutral-400 duration-300 hover:border-dark-700/20 hover:bg-dark-800/20'>
					<FaTiktok size={24} />
				</Link>
			</div>
		</div>
	)
}

export default ContactInformation
