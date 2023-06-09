import React from 'react'
import Header from './components/modules/Header'
import ContactCTA from './components/modules/ContactCTA'
import ServicesCards from './components/modules/ServicesCards'
import ServiceDescriptions from './components/modules/ServiceDescriptions'
import OurCapabilities from './components/modules/OurCapabilities'
import Process from './components/modules/Process'

const ServicesPage = () => {
	return (
		<>
			<Header />
			<ContactCTA />
			<OurCapabilities />
			<ServicesCards />
			<ServiceDescriptions />
			<Process />
		</>
	)
}

export default ServicesPage
