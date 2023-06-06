'use client'

import { ScrollParallax } from 'react-just-parallax'

type ParallaxProps = {
	children: React.ReactNode
	strength?: number
	scrollContainerRef?: React.MutableRefObject<any> | null
	enableOnTouchDevice?: boolean
	lerpEase?: number
	isHorizontal?: boolean
	isAbsolutelyPositioned?: boolean
	zIndex?: number | null
	shouldPause?: boolean
}

const Parallax = ({ children, ...props }: ParallaxProps): JSX.Element => {
	return <ScrollParallax {...props}>{children}</ScrollParallax>
}

export default Parallax
