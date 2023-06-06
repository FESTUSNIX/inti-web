import React from 'react'
import Header from './components/modules/Header'
import OurTeam from './components/modules/OurTeam'
import { getSingletonAboutUs, getTeamMembers } from '@/sanity/sanityUtils'
import QuoteSection from './components/modules/QuoteSection'
import OurApproach from './components/modules/OurApproach'

const AboutUsPage = async () => {
	const teamMembers = await getTeamMembers()
	const aboutUsData = await getSingletonAboutUs()

	return (
		<>
			<Header />

			<OurTeam teamMembers={teamMembers} aboutUsData={aboutUsData} />

			<QuoteSection />

			<OurApproach />
		</>
	)
}

export default AboutUsPage
