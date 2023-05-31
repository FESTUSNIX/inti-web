import React from 'react'
import SocialLinks from './components/modules/SocialLinks'
import ContactButtons from './components/modules/ContactButtons'

const ContactInformation = () => {
	return (
		<div className='flex grow basis-1/2 flex-col'>
			<h2 className='mb-16 font-heading text-5xl font-bold text-neutral-50 md:text-6xl 2xl:text-7xl'>
				Let&apos;s level up your&nbsp;
				<span className='inline-block'>brand&nbsp;</span>
				<span className='inline bg-gradient-brand bg-clip-text text-transparent'>together!</span>
			</h2>

			<ContactButtons />

			<SocialLinks />
		</div>
	)
}

export default ContactInformation
