'use client'

import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import clsx from 'clsx'
import React, { useState } from 'react'

export const Background = () => {
	const [isActive, setIsActive] = useState(false)

	useScrollPosition(
		({ currPos }) => {
			const isShow = currPos.y < 10

			if (isShow !== isActive) setIsActive(isShow)
		},
		[isActive]
	)

	return (
		<div
			className={clsx(
				'absolute inset-0 -z-10 border-b transition-colors duration-700',
				isActive ? 'border-dark-700/20 bg-dark-800/20 backdrop-blur-md' : 'border-transparent'
			)}></div>
	)
}
