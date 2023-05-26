'use client'

import React, { useRef, useEffect, useState } from 'react'
import SectionHeading from '../../elements/SectionHeading'
import Card from './components/modules/Card'
import { motion, useDragControls, animate, useMotionValue, useTransform } from 'framer-motion'
import Button from '../../elements/Button'

const OurAdvantages = () => {
	const constraints = useRef<HTMLDivElement>(null)

	const [constraintsHeight, setConstraintsHeight] = useState(0)
	const itemEls = useRef<HTMLDivElement[]>(new Array())

	const [isReset, setIsReset] = useState(false)

	// const y = useTransform(isReset, [false, true], [0, 100])

	useEffect(() => {
		const currentHeight = (constraints.current?.children[0].children[0] as HTMLDivElement)?.offsetHeight

		if (currentHeight !== constraintsHeight) setConstraintsHeight(currentHeight)
	}, [constraints.current])

	function getTranslateXY(element: HTMLDivElement) {
		const style = window.getComputedStyle(element)
		const matrix = new DOMMatrixReadOnly(style.transform)
		return {
			translateX: matrix.m41,
			translateY: matrix.m42
		}
	}

	useEffect(() => {
		console.log('IS_RESET', isReset)
	}, [isReset])

	const resetPosition = () => {
		setIsReset(false)
		setTimeout(() => {
			setIsReset(true)
		}, 1)
	}

	return (
		<section className='relative mb-32 border-y border-dark-700/20 bg-dark-800/20'>
			<div className='wrapper flex flex-col lg:flex-row lg:gap-32 '>
				<div>
					<SectionHeading className='mb-12 py-12 max-lg:text-center'>
						Wszystko czego potrzebuje twoja firma
					</SectionHeading>
					<Button onClick={() => resetPosition()} className='text-2xl'>
						TOGGLE
					</Button>
				</div>

				<div
					className='flex basis-1/2 gap-12 overflow-hidden'
					ref={constraints}
					style={{ maxHeight: constraintsHeight * 0.8 }}>
					{Array(1)
						.fill(0)
						.map((_, index) => (
							<motion.div
								key={index}
								ref={element => itemEls.current.push(element!)}
								drag='y'
								style={{
									// y: -constraintsHeight,
									...(isReset
										? {
												y: -constraintsHeight,
												x: 0
										  }
										: {})
								}}
								onDrag={(event, info) => {
									// console.log(info.offset.x, info.offset.y, info.point.y, event.layerY)
									// console.log(itemEls.current[index].offsetHeight)
									// console.log(getTranslateXY(itemEls.current[index]).translateY, constraintsHeight)
									if (
										getTranslateXY(itemEls.current[index]).translateY >= 0 ||
										getTranslateXY(itemEls.current[index]).translateY <= -(constraintsHeight * 2)
									) {
										console.log('yyeeeeeah')
										// setIsReset(true)
										resetPosition()
									} else {
										// console.log('noooo', isReset)
										// setIsReset(false)
									}
								}}
								className='cursor-grab  active:cursor-grabbing'>
								{Array(3)
									.fill(0)
									.map((_, index) => (
										<div key={index} className='flex flex-col gap-12 pb-12'>
											{Array(3)
												.fill(0)
												.map((_, index) => (
													<Card key={index} index={index} />
												))}
										</div>
									))}
							</motion.div>
						))}
					{/* <motion.div drag='y' style={{ y: -constraintsHeight }} className='cursor-grab active:cursor-grabbing'>
						{Array(3)
							.fill(0)
							.map((_, index) => (
								<div key={index} className='flex flex-col gap-12 pb-12'>
									{Array(3)
										.fill(0)
										.map((_, index) => (
											<Card key={index} index={index} />
										))}
								</div>
							))}
					</motion.div> */}
				</div>

				<div className='gradient-blob-1 absolute left-1/2 top-0 -z-10 -translate-x-1/2'></div>
			</div>
		</section>
	)
}

export default OurAdvantages
