import React from 'react'
import ContactInformation from './components/modules/ContactInformation'
import ContactForm from './components/modules/ContactForm'

const Contact = () => {
	return (
		<section className='bg-[#020006] pt-20'>
			<div className='wrapper flex flex-col gap-16 lg:flex-row lg:gap-32 xl:gap-36 2xl:max-3xl:gap-48'>
				<ContactInformation />

				<div className='h-px w-full bg-dark-700/20 lg:hidden'></div>

				<ContactForm />
			</div>
		</section>
	)
}

export default Contact
