import { calculateElementScrollProgress } from '@/app/utils/calculateElementScrollProgress'
import { useScroll, useSpring, useTransform, motion } from 'framer-motion'
import React from 'react'

type Props = {
	sectionElement: React.RefObject<HTMLDivElement>
}

const ScrollProgress = ({ sectionElement }: Props) => {
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

	return (
		<div className='absolute left-1/2 top-0 aspect-square w-24 translate-y-24 text-neutral-200 opacity-10 max-lg:-translate-x-1/2 lg:left-0 lg:w-48'>
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
	)
}

export default ScrollProgress
