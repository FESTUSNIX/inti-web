'use client'

import React, { useState } from 'react'
import CustomCursorContext, { CursorLookType } from '../context/CustomCursorContext'

type Props = {
	children: React.ReactNode
}

const CustomCursorManager = ({ children }: Props) => {
	const [type, setType] = useState<CursorLookType>('default')

	return <CustomCursorContext.Provider value={{ type, setType }}>{children}</CustomCursorContext.Provider>
}

export default CustomCursorManager
