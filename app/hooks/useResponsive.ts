'use client'

import { useMediaQuery } from 'react-responsive'

const breakpoints: { [key: string]: number } = {
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	'2xl': 1400,
	'3xl': 1600
}

const useResponsive = () => {
	const isXS = useMediaQuery({ maxWidth: breakpoints.sm })
	const isSM = useMediaQuery({ minWidth: breakpoints.sm })
	const isMD = useMediaQuery({ minWidth: breakpoints.md })
	const isLG = useMediaQuery({ minWidth: breakpoints.lg })
	const isXL = useMediaQuery({ minWidth: breakpoints.xl })
	const is2XL = useMediaQuery({ minWidth: breakpoints['2xl'] })
	const is3XL = useMediaQuery({ minWidth: breakpoints['3xl'] })

	return { isXS, isSM, isMD, isLG, isXL, is2XL, is3XL }
}

export default useResponsive
