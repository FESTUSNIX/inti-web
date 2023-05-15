import { Project } from '@/types/types'
import { StaticImageData } from 'next/image'
import React from 'react'
import ProjectImage from '../../elements/ProjectImage/ProjectImage'

type Props = {
	projects: Project[]
	sectionElement: React.RefObject<HTMLDivElement>
}

const ImagesContainer = ({ projects, sectionElement }: Props) => {
	const isSectionInView = () => {
		if (!sectionElement.current) return false

		return sectionElement.current.getBoundingClientRect()?.top < window.scrollY
	}

	return (
		<div className='flex flex-col pl-12 lg:basis-3/5'>
			{projects.map(project => (
				<div className='relative mt-[30vh] h-screen' key={project.id}>
					{project.images.map((img, index) => (
						<ProjectImage key={index} {...img} />
					))}
				</div>
			))}
		</div>
	)
}

export default ImagesContainer
