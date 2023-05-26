'use client'

import React, { useRef, useState } from 'react'

import { useScrollPosition } from '@/app/(main)/hooks/useScrollPosition'
import ProjectText from './components/modules/ProjectText'
import ImagesContainer from './components/modules/ImagesContainer'
import ScrollProgress from './components/elements/ScrollProgress'

const Portfolio = () => {
	//  DO NOT DELETE - Somehow it doesn't work without it
	const ancientMagicThatKeepsThisComponentWorking = useScrollPosition()

	const [currentProject, setCurrentProject] = useState(0)
	const sectionElement = useRef<HTMLDivElement>(null)
	return (
		<section className='wrapper relative flex flex-col lg:flex-row' ref={sectionElement}>
			<ProjectText sectionElement={sectionElement} currentProjectIndex={currentProject} />

			<ImagesContainer setCurrentProject={setCurrentProject} sectionElement={sectionElement} />
		</section>
	)
}

export default Portfolio
