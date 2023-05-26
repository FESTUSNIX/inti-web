'use client'

import React from 'react'
import ProjectImages from '../ProjectImages'
import { projects } from '../../../assets/exampleProjects'

type Props = {
	setCurrentProject: React.Dispatch<React.SetStateAction<number>>
	sectionElement: React.RefObject<HTMLDivElement>
}

const ImagesContainer = ({ setCurrentProject, sectionElement }: Props) => {
	return (
		<div className='flex flex-col lg:basis-3/5 lg:pl-12'>
			{projects.map((project, index) => (
				<ProjectImages
					key={index}
					index={index}
					project={project}
					setCurrentProject={setCurrentProject}
					sectionElement={sectionElement}
				/>
			))}
		</div>
	)
}

export default ImagesContainer
