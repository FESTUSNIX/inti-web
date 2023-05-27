'use client'

import React, { useRef } from 'react'
import ProjectImage from '../../elements/ProjectImage'
import { Project } from '@/types/Project'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

type Props = {
	currentProject: number
	index: number
	project: Project
	setCurrentProject: React.Dispatch<React.SetStateAction<number>>
	sectionElement: React.RefObject<HTMLDivElement>
}

const ProjectImages = ({ index, project, setCurrentProject, sectionElement, currentProject }: Props) => {
	const projectSectionRef = useRef<HTMLDivElement>(null)

	const handleSectionChange = (element: React.RefObject<HTMLDivElement>) => {
		if (!element?.current) return false

		if (
			element.current.getBoundingClientRect()?.top - window.innerHeight / 2 < 0 &&
			element.current.getBoundingClientRect()?.bottom - window.innerHeight / 2 > 0 &&
			currentProject !== index
		) {
			console.log('setting index', currentProject, index)
			setCurrentProject(index)
		}
	}

	useScrollPosition(() => {
		handleSectionChange(projectSectionRef)
	}, [currentProject])

	return (
		<div className={`relative mt-[15vh] h-screen`} ref={projectSectionRef}>
			{project.images.map((image, index) => (
				<ProjectImage key={index} {...image} projectSectionRef={projectSectionRef} sectionElement={sectionElement} />
			))}
		</div>
	)
}

export default ProjectImages
