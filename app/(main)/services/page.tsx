import React from 'react'
import ContactCTA from './components/modules/ContactCTA'
import ServicesCards from './components/modules/ServicesCards'
import ServiceDescriptions from './components/modules/ServiceDescriptions'
import OurCapabilities from './components/modules/OurCapabilities'
import Process from './components/modules/Process'
import Hero from './components/modules/Hero'
import Contact from '../components/modules/Contact'
import { getSingletonServices } from '@/sanity/sanityUtils'

const ServicesPage = async () => {
	const pageData = await getSingletonServices()

	return (
		<>
			<Hero />
			<ContactCTA data={pageData.contactCTA} />
			<OurCapabilities data={pageData.ourCapabilities} />
			<ServicesCards data={pageData.serviceCards} />
			<ServiceDescriptions data={pageData.serviceDescriptions} />
			<Process data={pageData.process} />
			<Contact />
		</>
	)
}

export default ServicesPage
