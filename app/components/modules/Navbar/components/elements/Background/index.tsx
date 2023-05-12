'use client'

import React from 'react'
import { useScrollPosition } from '@/app/hooks/useScrollPosition'

export const Background = () => {
	const scrollPosition = useScrollPosition()

	return (
		<div
			className={`${
				scrollPosition > 10 ? 'bg-dark-800/20 backdrop-blur-md border-dark-700/20' : 'border-transparent'
			}  absolute inset-0 -z-10 transition-colors border-b duration-700`}></div>
	)
}
