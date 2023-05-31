import React from 'react'
import ContactForm from '../components/modules/Contact/components/modules/ContactForm'
import FAQ from '../components/modules/FAQ'
import ContactButtons from '../components/modules/Contact/components/modules/ContactInformation/components/modules/ContactButtons'
import SocialLinks from '../components/modules/Contact/components/modules/ContactInformation/components/modules/SocialLinks'

const ContactPage = () => {
	return (
		<div className='wrapper pb-24 pt-48'>
			<section className='wrapper mb-24 flex flex-col gap-16 lg:flex-row lg:gap-32 xl:gap-36 2xl:max-3xl:gap-48'>
				<div className='flex grow basis-1/2 flex-col'>
					<h1 className='mb-16 font-heading text-5xl font-bold text-neutral-50 md:text-6xl 2xl:text-7xl'>
						Let&apos;s level up your&nbsp;
						<span className='inline-block'>brand&nbsp;</span>
						<span className='inline bg-gradient-brand bg-clip-text text-transparent'>together!</span>
					</h1>

					<ContactButtons />

					<SocialLinks />
				</div>

				<div className='h-px w-full bg-dark-700/20 lg:hidden'></div>
				<ContactForm />
			</section>

			{/* @ts-expect-error Server Component */}
			<FAQ />
		</div>
	)
}

export default ContactPage
