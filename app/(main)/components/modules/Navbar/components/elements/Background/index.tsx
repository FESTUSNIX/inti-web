'use client'

import React from 'react'
import { useScrollPosition } from '@/app/(main)/hooks/useScrollPosition'

export const Background = () => {
	const scrollPosition = useScrollPosition()

	return (
		<div
			className={`${
				scrollPosition > 10 ? 'border-dark-700/20 bg-dark-800/20 backdrop-blur-md' : 'border-transparent'
			}  absolute inset-0 -z-10 border-b transition-colors duration-700`}></div>
	)
}
