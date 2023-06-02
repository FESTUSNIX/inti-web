'use client'

import Button from '@/app/(main)/components/elements/Button'
import SectionHeading from '@/app/(main)/components/elements/SectionHeading'
import React, { useEffect, useRef, useState } from 'react'
import useResponsive from '@/app/(main)/hooks/useResponsive'
import ScrollProgress from '../../elements/ScrollProgress'
import { Project } from '@/types/Project'
import PortableText from '@/app/(main)/components/elements/PortableText'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

type Props = {
	sectionElement: React.RefObject<HTMLDivElement>
	currentProjectIndex: number
	projects: Project[]
	defaultText: Project
}

const ProjectText = ({ sectionElement, currentProjectIndex, projects, defaultText }: Props) => {
	const { isLG } = useResponsive()

	const textElement = useRef<HTMLDivElement>(null)
	let textElementFirstHeight = useRef(0)

	const [currentProject, setCurrentProject] = useState(defaultText)
	const [isInStickPos, setIsInStickPos] = useState(false)
	const [isInSectionBottom, setIsInSectionBottom] = useState(false)

	const checkIsInStickPosition = () => {
		if (!sectionElement.current || !textElement.current) return false

		return (
			sectionElement.current.getBoundingClientRect()?.top <
			(isLG ? window.innerHeight / 2 - textElement.current.offsetHeight / 2 : 112)
		)
	}

	const checkIsInSectionBottom = () => {
		if (!sectionElement.current || !textElement.current) return false

		return sectionElement.current.getBoundingClientRect()?.bottom < window.innerHeight
	}

	const updateCurrentProject = () => {
		setCurrentProject(!checkIsInStickPosition() ? defaultText : projects[currentProjectIndex])
	}

	useEffect(() => {
		if (!textElement?.current?.offsetHeight) return

		textElementFirstHeight.current = textElement.current.offsetHeight
	}, [])

	useEffect(() => {
		updateCurrentProject()
	}, [currentProjectIndex])

	useScrollPosition(
		() => {
			if (isInStickPos !== checkIsInStickPosition()) {
				updateCurrentProject()
				setIsInStickPos(checkIsInStickPosition())
			}
			if (isInSectionBottom !== checkIsInSectionBottom()) {
				setIsInSectionBottom(checkIsInSectionBottom())
			}
		},
		[isInSectionBottom, isInStickPos],
		sectionElement as React.MutableRefObject<HTMLElement | undefined>
	)

	return (
		<div
			className={`min-h-full grow lg:basis-2/5 ${checkIsInSectionBottom() ? 'flex' : ''}`}
			style={{ minHeight: textElementFirstHeight.current }}>
			<div
				ref={textElement}
				className={`flex flex-col lg:pr-12 ${
					!isInSectionBottom && isInStickPos ? `fixed top-0 max-lg:mt-28 lg:top-1/2 lg:-translate-y-1/2` : ''
				} ${
					isInSectionBottom
						? 'absolute bottom-[75vh] top-auto mt-auto translate-y-1/2 justify-end lg:relative lg:bottom-[50vh]'
						: 'justify-center'
				}`}
				style={{ width: sectionElement?.current?.offsetWidth! * (isLG ? 0.4 : 1) }}>
				<div>
					<SectionHeading label='portfolio'>{currentProject.name}</SectionHeading>
					<PortableText content={currentProject.description} className='mb-4 text-neutral-400' />
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
