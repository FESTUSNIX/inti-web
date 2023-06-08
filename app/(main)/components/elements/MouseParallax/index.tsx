'use client'

import { MouseParallax as JustMouseParallax } from 'react-just-parallax'

type MouseParallaxProps = {
	strength?: number
	children?: React.ReactNode
	parallaxContainerRef?: React.MutableRefObject<any> | null
	scrollContainerRef?: React.MutableRefObject<any> | null
	shouldResetPosition?: boolean
	enableOnTouchDevice?: boolean
	lerpEase?: number
	isAbsolutelyPositioned?: boolean
	zIndex?: number | null
	shouldPause?: boolean
}

const MouseParallax = ({ children, ...props }: MouseParallaxProps): JSX.Element => {
	return <JustMouseParallax {...props}>{children}</JustMouseParallax>
}

export default MouseParallax
