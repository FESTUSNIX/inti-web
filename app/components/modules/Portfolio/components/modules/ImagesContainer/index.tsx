'use client'


import React from 'react'
import ProjectImages from '../ProjectImages'
import { projects } from '../../../assets/exampleProjects'

type Props = {
	setCurrentProject: React.Dispatch<React.SetStateAction<number>>
}

const ImagesContainer = ({ setCurrentProject }: Props) => {
	return (
		<div className='flex flex-col pl-12 lg:basis-3/5'>
			{projects.map((project, index) => (
				<ProjectImages key={index} index={index} project={project} setCurrentProject={setCurrentProject} />
			))}
		</div>
	)
}

export default ImagesContainer
