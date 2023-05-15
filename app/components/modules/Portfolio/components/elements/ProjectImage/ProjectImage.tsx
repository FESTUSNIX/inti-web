import React from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { ProjectImage as ProjectImageType } from '@/types/types'

const ProjectImage = ({ bottom, left, right, maxWidth, speed, image, alt = '' }: ProjectImageType) => {
	const { scrollY } = useScroll()

	const springTransition = useSpring(scrollY, {
		stiffness: 400,
		damping: 50,
		bounce: 0
	})

	const transformedY = useTransform(springTransition, value => -value * speed)

	return (
		<motion.div style={{ y: transformedY, bottom, maxWidth, left, right }} className='absolute'>
			<Image src={image} alt={alt} />
		</motion.div>
	)
}

export default ProjectImage
