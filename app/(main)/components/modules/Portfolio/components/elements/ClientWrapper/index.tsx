'use client'

import React, { useRef, useState, useEffect } from 'react'
import ProjectText from '../../../components/modules/ProjectText'
import ImagesContainer from '../../../components/modules/ImagesContainer'
import { Project } from '@/types/Project'

type Props = {
	projects: Project[]
	defaultText: Project
}

const ClientWrapper = ({ projects, defaultText }: Props) => {
	const [currentProject, setCurrentProject] = useState(0)
	const sectionElement = useRef<HTMLDivElement>(null)

	useEffect(() => {
		console.log(currentProject)
	}, [currentProject])

	return (
		<section className='wrapper relative flex flex-col lg:flex-row' ref={sectionElement}>
			<ProjectText
				sectionElement={sectionElement}
				currentProjectIndex={currentProject}
				projects={projects}
				defaultText={defaultText}
			/>

			<ImagesContainer
				setCurrentProject={setCurrentProject}
				sectionElement={sectionElement}
				currentProject={currentProject}
				projects={projects}
			/>
		</section>
	)
}

export default ClientWrapper
