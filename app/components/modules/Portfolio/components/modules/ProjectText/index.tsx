'use client'

import Button from '@/app/components/elements/Button'
import SectionHeading from '@/app/components/elements/SectionHeading'
import { calculateElementScrollProgress } from '@/app/utils/calculateElementScrollProgress'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

type Props = {
	sectionElement: React.RefObject<HTMLDivElement>
}

const ProjectText = ({ sectionElement }: Props) => {
	const textElement = useRef<HTMLDivElement>(null)

	const { scrollY } = useScroll()

	const defaultSpring = useSpring(scrollY, {
		stiffness: 400,
		damping: 50,
		bounce: 0
	})

	const sectionScrollProgress = useTransform(
		defaultSpring,
		value => calculateElementScrollProgress(value, sectionElement.current!) / 100
	)

	const isInCenterOfScreen = () => {
		if (!sectionElement.current || !textElement.current) {
			return false
		}

		return (
			sectionElement.current.getBoundingClientRect()?.top < (window.innerHeight - textElement.current.offsetHeight) / 2
		)
	}

	return (
		<div className='min-h-full grow lg:basis-2/5'>
			<div
				ref={textElement}
				className={`flex flex-col justify-center ${
					isInCenterOfScreen() ? `fixed top-1/2 -translate-y-1/2` : 'relative'
				}`}
				style={{ width: sectionElement?.current?.offsetWidth! * 0.4 }}>
				<SectionHeading>Zobacz wybrane realizacje naszych stron</SectionHeading>
				<p className='mb-4 text-neutral-400'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum placeat aut, accusantium quaerat nesciunt
					veniam culpa tenetur, tempore voluptas, in eos aperiam fugit fugiat ab?
				</p>

				<Button className='w-max'>zobacz więcej</Button>

				<div className='absolute right-0 top-1/2 w-48 -translate-y-1/2 translate-x-[30vw] text-neutral-200 opacity-10'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='100%'
						height='100%'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='feather feather-arrow-down-circle'>
						<motion.circle cx='12' cy='12' r='10' style={{ pathLength: sectionScrollProgress }} />
						<motion.polyline points='8 12 12 16 16 12' />
						<motion.line x1='12' y1='8' x2='12' y2='16' />
					</svg>
				</div>
			</div>
		</div>
	)
}

export default ProjectText
