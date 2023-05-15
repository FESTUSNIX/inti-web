'use client'

import React, { useEffect, useRef } from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition'

const Tests = () => {
	const scrollPos = useScrollPosition()
	const textEl = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const target = textEl.current
		if (target) {
			const itemLength =
				window.scrollY + window.innerHeight <= target.offsetTop
					? 0
					: window.scrollY + window.innerHeight - target.offsetTop <= window.innerHeight + target.offsetHeight
					? window.scrollY + window.innerHeight - target.offsetTop
					: window.innerHeight + target.offsetHeight

			const percentage = Math.round((itemLength * 100) / (window.innerHeight + target.offsetHeight))
			console.log(percentage)
		}
	}, [scrollPos])

	return (
		<div className='wrapper'>
			<div className='grid h-screen place-items-center bg-neutral-400'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet totam a corporis at sapiente, autem maxime quia
				mollitia animi maiores sequi placeat laborum delectus ex odio id eum quaerat praesentium deleniti nobis
				similique! Dolorum obcaecati dignissimos odit asperiores veritatis, quo sint at doloribus assumenda non dolores
				iure eligendi fugit pariatur.
			</div>

			<div className='grid h-screen place-items-center bg-neutral-400'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet totam a corporis at sapiente, autem maxime quia
				mollitia animi maiores sequi placeat laborum delectus ex odio id eum quaerat praesentium deleniti nobis
				similique! Dolorum obcaecati dignissimos odit asperiores veritatis, quo sint at doloribus assumenda non dolores
				iure eligendi fugit pariatur.
			</div>
			<div className='grid h-screen place-items-center bg-dark-900' ref={textEl}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet totam a corporis at sapiente, autem maxime quia
				mollitia animi maiores sequi placeat laborum delectus ex odio id eum quaerat praesentium deleniti nobis
				similique! Dolorum obcaecati dignissimos odit asperiores veritatis, quo sint at doloribus assumenda non dolores
				iure eligendi fugit pariatur.
			</div>

			<div className='grid h-screen place-items-center bg-neutral-400'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet totam a corporis at sapiente, autem maxime quia
				mollitia animi maiores sequi placeat laborum delectus ex odio id eum quaerat praesentium deleniti nobis
				similique! Dolorum obcaecati dignissimos odit asperiores veritatis, quo sint at doloribus assumenda non dolores
				iure eligendi fugit pariatur.
			</div>
		</div>
	)
}

export default Tests
