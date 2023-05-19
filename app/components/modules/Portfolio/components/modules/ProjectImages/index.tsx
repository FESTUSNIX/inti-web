import React, { useEffect, useRef } from 'react'
import ProjectImage from '../../elements/ProjectImage'
import { Project } from '@/types/types'
import { useScrollListener } from '@/app/hooks/useScrollListener'

type Props = {
	index: number
	project: Project
	setCurrentProject: React.Dispatch<React.SetStateAction<number>>
	sectionElement: React.RefObject<HTMLDivElement>
}

const ProjectImages = ({ index, project, setCurrentProject, sectionElement }: Props) => {
	const projectSectionRef = useRef<HTMLDivElement>(null)

	const handleSectionChange = (element: React.RefObject<HTMLDivElement>) => {
		if (!element?.current) return false

		if (element.current.getBoundingClientRect()?.top - window.innerHeight / 2 < 0) {
			setCurrentProject(index)
		}
	}

	useScrollListener(() => handleSectionChange(projectSectionRef))

	return (
		<div className={`relative mt-[15vh] h-screen`} ref={projectSectionRef}>
			{project.images.map((image, imgIndex) => (
				<ProjectImage key={imgIndex} {...image} projectSectionRef={projectSectionRef} sectionElement={sectionElement} />
			))}
		</div>
	)
}

export default ProjectImages
