import { useContext } from 'react'
import { CustomCursorContext } from '../context/CustomCursorContext'

export const useCustomCursorContext = () => {
	const context = useContext(CustomCursorContext)

	if (!context) {
		throw Error('useCustomCursorContext must be used inside an CustomCursorManager')
	}

	return context
}
