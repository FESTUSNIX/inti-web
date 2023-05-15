'use client'

import React, { useRef } from 'react'
import LaptopImage from './assets/laptop-image.png'
import TabletImage from './assets/tablet-image.png'
import PhoneImage from './assets/phone-image.png'

import { useScrollPosition } from '@/app/hooks/useScrollPosition'
import DeviceFrame from './components/elements/ProjectImage/ProjectImage'
import ProjectText from './components/modules/ProjectText'
import ImagesContainer from './components/modules/ImagesContainer'
import ProjectImage from './components/elements/ProjectImage/ProjectImage'
import { Project, ProjectImage as ProjectImageType } from '@/types/types'

const project: Project = {
	id: Math.random(),
	name: 'Novies',
	description:
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam qui quos, dolorum harum, dolore voluptate, quis sit provident sapiente voluptatibus excepturi nostrum aliquam eaque unde.',
	images: [
		{
			image: PhoneImage,
			bottom: '-60vh',
			speed: 0.3,
			right: '-3vw',
			maxWidth: '40%'
		},
		{
			image: LaptopImage,
			bottom: '-70vh',
			speed: 0.35,
			left: '-8vw',
			maxWidth: '80%'
		},
		{
			image: TabletImage,
			bottom: '-90vh',
			speed: 0.6,
			left: '0',
			maxWidth: '60%'
		}
	]
}

const projects: Project[] = Array(3).fill(project)

const Portfolio = () => {
	//  DO NOT DELETE - Somehow it doesn't work without it
	const scrollPos = useScrollPosition()

	const sectionElement = useRef<HTMLDivElement>(null)

	return (
		<section className='relative flex flex-col lg:flex-row' ref={sectionElement}>
			<ProjectText sectionElement={sectionElement} />

			<ImagesContainer projects={projects} sectionElement={sectionElement} />
		</section>
	)
}

export default Portfolio
