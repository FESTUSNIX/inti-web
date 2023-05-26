'use client'

import { useEffect } from 'react'

export const useScrollListener = (func: Function) => {
	useEffect(() => {
		const runCustomFunction = () => {
			func()
		}

		window.addEventListener('scroll', runCustomFunction)

		runCustomFunction()

		return () => window.removeEventListener('scroll', runCustomFunction)
	}, [])
}
