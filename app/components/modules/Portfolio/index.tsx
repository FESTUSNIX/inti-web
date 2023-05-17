'use client'

import React, { useRef, useState } from 'react'

import { useScrollPosition } from '@/app/hooks/useScrollPosition'
import DeviceFrame from './components/elements/ProjectImage/ProjectImage'
import ProjectText from './components/modules/ProjectText'
import ImagesContainer from './components/modules/ImagesContainer'
import { Project, ProjectImage as ProjectImageType } from '@/types/types'

const Portfolio = () => {
	//  DO NOT DELETE - Somehow it doesn't work without it
	const ancientMagicThatKeepsThisComponentWorking = useScrollPosition()

	const [currentProject, setCurrentProject] = useState(0)
	const sectionElement = useRef<HTMLDivElement>(null)
	return (
		<section className='wrapper relative flex flex-col lg:flex-row' ref={sectionElement}>
			<ProjectText sectionElement={sectionElement} currentProjectIndex={currentProject} />

			<ImagesContainer setCurrentProject={setCurrentProject} />
		</section>
	)
}

export default Portfolio
