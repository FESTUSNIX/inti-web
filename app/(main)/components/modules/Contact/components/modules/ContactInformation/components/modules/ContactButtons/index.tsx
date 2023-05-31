import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const ContactButtons = () => {
	return (
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
	)
}

export default ContactButtons
