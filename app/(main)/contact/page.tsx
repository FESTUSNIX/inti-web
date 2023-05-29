import React from 'react'
import ContactForm from '../components/modules/Contact/components/modules/ContactForm'
import ContactInformation from '../components/modules/Contact/components/modules/ContactInformation'
import FAQ from '../components/modules/FAQ'

const ContactPage = () => {
	return (
		<div className='wrapper pb-24 pt-48'>
			<section className='wrapper mb-24 flex flex-col gap-16 lg:flex-row lg:gap-32 xl:gap-36 2xl:max-3xl:gap-48'>
				<ContactInformation headingType='h1' />
				<div className='h-px w-full bg-dark-700/20 lg:hidden'></div>
				<ContactForm />
			</section>

			{/* @ts-expect-error Server Component */}
			<FAQ />
		</div>
	)
}

export default ContactPage
