import React from 'react'
import ClientWrapper from './components/elements/ClientWrapper'
import { getPortfolioDefaultText, getProjects } from '@/sanity/sanity-utils'

const Portfolio = async () => {
	const projects = await getProjects()
	const defaultText = await getPortfolioDefaultText()

	return <ClientWrapper projects={projects} defaultText={defaultText} />
}

export default Portfolio
