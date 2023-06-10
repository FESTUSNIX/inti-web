'use client'

import { createContext } from 'react'
import React, { useState } from 'react'

export type CursorLookType = 'button' | 'text' | 'link' | 'hamburger' | 'default'
export type CustomCursorType = {
	type: CursorLookType
	setType: (type: CursorLookType) => void
}
export type CustomCursorText = {
	text: string
	setText: (text: string) => void
}

export const CustomCursorContext = createContext<CustomCursorType & CustomCursorText>({
	type: 'default',
	setType: () => {},
	text: '',
	setText: () => {}
})

export const CustomCursorProvider = ({ children }: { children: React.ReactNode }) => {
	const [type, setType] = useState<CursorLookType>('default')
	const [text, setText] = useState('')

	return (
		<CustomCursorContext.Provider value={{ type, setType, text, setText }}>{children}</CustomCursorContext.Provider>
	)
}
