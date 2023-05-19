import React from 'react'
import ContactInformation from './components/modules/ContactInformation'
import ContactForm from './components/modules/ContactForm'

const Contact = () => {
	return (
		<section className='bg-[#020006] pt-20'>
			<div className='wrapper flex flex-col gap-16'>
				<ContactInformation />
				<ContactForm />
			</div>
		</section>
	)
}

export default Contact
