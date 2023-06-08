'use client'

import React, { useContext, useEffect, useRef } from 'react'
import CustomCursorContext from './context/CustomCursorContext'
import './styles/index.css'

type Props = {
	secondaryCursorDelay?: number
	secondaryCursorColapseTimeout?: number
}

const CustomCursor = ({ secondaryCursorColapseTimeout = 3000, secondaryCursorDelay = 25 }: Props) => {
	const { type } = useContext(CustomCursorContext)
	const secondaryCursor = useRef<HTMLDivElement>(null)
	const mainCursor = useRef<HTMLDivElement>(null)
	const positionRef = useRef({
		mouseX: 0,
		mouseY: 0,
		delay: secondaryCursorDelay,
		revisedMousePosX: 0,
		revisedMousePosY: 0,
		noDelayRevisedMousePosY: 0,
		noDelayRevisedMousePosX: 0
	})
	const colapseTimeout = useRef<NodeJS.Timeout>()

	useEffect(() => {
		const setMousePos = (e: MouseEvent) => {
			positionRef.current.mouseX = e.pageX
			positionRef.current.mouseY = e.pageY
		}

		const handleColapseCursor = () => {
			if (!secondaryCursor.current) return
			secondaryCursor.current.classList.remove('colapse')
			secondaryCursor.current.classList.add('un-colapse')

			clearTimeout(colapseTimeout.current)
			colapseTimeout.current = setTimeout(() => {
				if (!secondaryCursor.current) return

				secondaryCursor.current.classList.remove('un-colapse')
				secondaryCursor.current.classList.add('colapse')
			}, secondaryCursorColapseTimeout)
		}

		document.addEventListener('mousemove', e => {
			setMousePos(e)
			handleColapseCursor()
		})

		return () => {
			document.removeEventListener('mousemove', e => {
				setMousePos(e)
				handleColapseCursor()
			})
		}
	}, [])

	useEffect(() => {
		const handleMouseDown = () => {
			if (!mainCursor.current || !secondaryCursor.current) return

			if (secondaryCursor.current.classList.contains('colapse')) {
				secondaryCursor.current.classList.remove('colapse')
				secondaryCursor.current.classList.add('un-colapse')
			}

			secondaryCursor.current.style.scale = '1.4'
		}
		const handleMouseUp = () => {
			if (!mainCursor.current || !secondaryCursor.current) return

			secondaryCursor.current.style.scale = '1'
		}

		document.body.addEventListener('mousedown', handleMouseDown)
		document.body.addEventListener('mouseup', handleMouseUp)

		return () => {
			document.body.removeEventListener('mousedown', handleMouseDown)
			document.body.removeEventListener('mouseup', handleMouseUp)
		}
	}, [])

	useEffect(() => {
		const delayMouseFollow = () => {
			if (!mainCursor.current || !secondaryCursor.current) return

			requestAnimationFrame(delayMouseFollow)

			positionRef.current.revisedMousePosY +=
				(positionRef.current.mouseY - positionRef.current.revisedMousePosY) / positionRef.current.delay
			positionRef.current.revisedMousePosX +=
				(positionRef.current.mouseX - positionRef.current.revisedMousePosX) / positionRef.current.delay
			positionRef.current.noDelayRevisedMousePosY +=
				positionRef.current.mouseY - positionRef.current.noDelayRevisedMousePosY
			positionRef.current.noDelayRevisedMousePosX +=
				positionRef.current.mouseX - positionRef.current.noDelayRevisedMousePosX

			secondaryCursor.current.style.top = positionRef.current.revisedMousePosY + 'px'
			secondaryCursor.current.style.left = positionRef.current.revisedMousePosX + 'px'
			mainCursor.current.style.top = positionRef.current.noDelayRevisedMousePosY + 'px'
			mainCursor.current.style.left = positionRef.current.noDelayRevisedMousePosX + 'px'
		}
		delayMouseFollow()

		return () => {}
	}, [])

	return (
		<div className={`cursor-wrapper ${type}`}>
			<div className='main-cursor' ref={mainCursor}></div>
			<div className='secondary-cursor invert' ref={secondaryCursor}></div>
		</div>
	)
}

export default CustomCursor
