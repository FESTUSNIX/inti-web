'use client'

import React from 'react'
import { useCustomCursorContext } from '../CustomCursor/hooks/useCustomCursorContext'
import { CursorLookType } from '../CustomCursor/context/CustomCursorContext'

type Props = {
	children: React.ReactNode
	hoverType: CursorLookType
	className?: string
}

const CursorHoverProvider = ({ children, hoverType, className }: Props) => {
	const { setType } = useCustomCursorContext()

	return (
		<span
			suppressHydrationWarning={true}
			onMouseEnter={() => setType(hoverType)}
			onMouseLeave={() => setType('default')}
			className={`contents ${className}`}>
			{children}
		</span>
	)
}

export default CursorHoverProvider
