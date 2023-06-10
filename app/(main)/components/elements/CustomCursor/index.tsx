'use client'

import React, { useState, useEffect, useRef } from 'react'
import './styles/index.css'
import { useCustomCursorContext } from './hooks/useCustomCursorContext'
import { useMotionValue, motion, useSpring } from 'framer-motion'

type Props = {
	secondaryCursorDelay?: number
	secondaryCursorColapseTimeout?: number
}

const CustomCursor = ({ secondaryCursorColapseTimeout = 3000, secondaryCursorDelay = 0.1 }: Props) => {
	const { type, text } = useCustomCursorContext()

	const secondaryCursor = useRef<HTMLDivElement>(null)
	const mainCursor = useRef<HTMLDivElement>(null)

	const cursorX = useMotionValue(-100)
	const cursorY = useMotionValue(-100)

	const springConfig = { damping: 25, stiffness: 150 }
	const cursorXSpring = useSpring(cursorX, springConfig)
	const cursorYSpring = useSpring(cursorY, springConfig)

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			cursorX.set(e.clientX)
			cursorY.set(e.clientY)
		}

		window.addEventListener('mousemove', moveCursor)
		return () => {
			window.removeEventListener('mousemove', moveCursor)
		}
	}, [])

	return (
		<>
			<motion.div
				className='main-cursor'
				ref={mainCursor}
				style={{
					translateX: cursorXSpring,
					translateY: cursorYSpring
				}}>
				<span>{text}</span>
			</motion.div>
			<motion.div
				className='secondary-cursor'
				ref={secondaryCursor}
				style={{
					translateX: cursorXSpring,
					translateY: cursorYSpring
				}}>
				<span>{text}</span>
			</motion.div>
		</>
	)
}

export default CustomCursor
