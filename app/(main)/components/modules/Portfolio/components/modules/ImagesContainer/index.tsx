import React from 'react'
import ProjectImages from '../ProjectImages'
import { Project } from '@/types/Project'

type Props = {
	projects: Project[]
	currentProject: number
	setCurrentProject: React.Dispatch<React.SetStateAction<number>>
	sectionElement: React.RefObject<HTMLDivElement>
}

const ImagesContainer = ({ setCurrentProject, sectionElement, currentProject, projects }: Props) => {
	return (
		<div className='flex flex-col lg:basis-3/5 lg:pl-12'>
			{projects.map((project, index) => (
				<ProjectImages
					key={index}
					index={index}
					project={project}
					setCurrentProject={setCurrentProject}
					sectionElement={sectionElement}
					currentProject={currentProject}
				/>
			))}
		</div>
	)
}

export default ImagesContainer
