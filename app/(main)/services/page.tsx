import React from 'react'
import ContactCTA from './components/modules/ContactCTA'
import ServicesCards from './components/modules/ServicesCards'
import ServiceDescriptions from './components/modules/ServiceDescriptions'
import OurCapabilities from './components/modules/OurCapabilities'
import Process from './components/modules/Process'
import Hero from './components/modules/Hero'

const ServicesPage = () => {
	return (
		<>
			<Hero />
			<ContactCTA />
			<OurCapabilities />
			<ServicesCards />
			<ServiceDescriptions />
			<Process />
		</>
	)
}

export default ServicesPage
