'use client'

import Button from '@/app/(main)/components/elements/Button'
import SectionHeading from '@/app/(main)/components/elements/SectionHeading'
import React, { useEffect, useRef } from 'react'
import { projects } from '../../../assets/exampleProjects'
import useResponsive from '@/app/(main)/hooks/useResponsive'
import ScrollProgress from '../../elements/ScrollProgress'

type Props = {
	sectionElement: React.RefObject<HTMLDivElement>
	currentProjectIndex: number
}

const ProjectText = ({ sectionElement, currentProjectIndex }: Props) => {
	const { isLG } = useResponsive()
	const textElement = useRef<HTMLDivElement>(null)
	let textElementFirstHeight = useRef(0)

	const isInStickPosition = () => {
		if (!sectionElement.current || !textElement.current) return false

		return (
			sectionElement.current.getBoundingClientRect()?.top <
			(isLG ? window.innerHeight / 2 - textElement.current.offsetHeight / 2 : 112)
		)
	}

	const isInSectionBottom = () => {
		if (!sectionElement.current || !textElement.current) return false

		return sectionElement.current.getBoundingClientRect()?.bottom < window.innerHeight
	}

	const defaultText = useRef({
		name: 'Zobacz wybrane realizacje naszych stron',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum placeat aut, accusantium quaerat nesciunt veniam culpa tenetur, tempore voluptas, in eos aperiam fugit fugiat ab?'
	})

	const currentProject = !isInStickPosition() ? defaultText.current : projects[currentProjectIndex]

	useEffect(() => {
		if (!textElement?.current?.offsetHeight) return

		textElementFirstHeight.current = textElement.current.offsetHeight
	}, [])

	return (
		<div
			className={`min-h-full grow lg:basis-2/5 ${isInSectionBottom() ? 'flex' : ''}`}
			style={{ minHeight: textElementFirstHeight.current }}>
			<div
				ref={textElement}
				className={`flex flex-col lg:pr-12 ${
					!isInSectionBottom() && isInStickPosition() ? `fixed top-0 max-lg:mt-28 lg:top-1/2 lg:-translate-y-1/2` : ''
				} ${
					isInSectionBottom()
						? 'absolute bottom-[75vh] top-auto mt-auto translate-y-1/2 justify-end lg:relative lg:bottom-[50vh]'
						: 'justify-center'
				}`}
				style={{ width: sectionElement?.current?.offsetWidth! * (isLG ? 0.4 : 1) }}>
				<div>
					<SectionHeading>{currentProject.name}</SectionHeading>
					<p className='mb-4 text-neutral-400'>{currentProject.description}</p>
				</div>

				<Button className='w-max'>zobacz więcej</Button>

				<div className='relative'>
					<ScrollProgress sectionElement={sectionElement} />
				</div>
			</div>
		</div>
	)
}

export default ProjectText
