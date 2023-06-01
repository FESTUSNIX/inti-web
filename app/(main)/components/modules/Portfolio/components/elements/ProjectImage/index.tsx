'use client'

import React from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ProjectImage as ProjectImageType } from '@/types/Project'
import { sanityUrlFor } from '@/sanity/sanityUtils'

type Props = ProjectImageType & {
	projectSectionRef: React.RefObject<HTMLDivElement>
	sectionElement: React.RefObject<HTMLDivElement>
}

const ProjectImage = ({ projectSectionRef, sectionElement, bottom, left, right, maxWidth, speed, image }: Props) => {
	const { scrollY } = useScroll()

	const springTransition = useSpring(scrollY, {
		stiffness: 400,
		damping: 100,
		bounce: 0
	})

	const transformedY = useTransform(
		springTransition,
		value => -(value - (projectSectionRef?.current?.offsetTop ?? 0) - (sectionElement?.current?.offsetTop ?? 0)) * speed
	)

	return (
		<motion.div style={{ y: transformedY, bottom, maxWidth, left, right }} className={`absolute`}>
			<Image src={sanityUrlFor(image).url()} alt={image.alt} width={900} height={900} />
		</motion.div>
	)
}

export default ProjectImage
