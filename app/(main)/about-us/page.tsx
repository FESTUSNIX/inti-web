import React from 'react'
import Header from './components/modules/Header'
import OurTeam from './components/modules/OurTeam'
import { getSingletonAboutUs, getTeamMembers } from '@/sanity/sanityUtils'
import QuoteSection from './components/modules/QuoteSection'
import OurMission from './components/modules/OurMission'

const AboutUsPage = async () => {
	const teamMembers = await getTeamMembers()
	const aboutUsData = await getSingletonAboutUs()

	return (
		<>
			<Header />

			<OurTeam teamMembers={teamMembers} aboutUsData={aboutUsData} />

			<QuoteSection />

			<OurMission />
		</>
	)
}

export default AboutUsPage
