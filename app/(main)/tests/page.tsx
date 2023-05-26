'use client'

import React, { useState } from 'react'
import './styles.css'
import TimeSelect from './components/elements/TimeSelect'

const Tests = () => {
	const [startTime, setStartTime] = useState({ hour: '', minutes: '00' })

	return (
		<div className='wrapper flex min-h-screen flex-col items-center justify-center'>
			<TimeSelect value={startTime} setValue={setStartTime} label='Start with' />

			{/* <Field value={val} setValue={setVal} label='Your name' /> */}
		</div>
	)
}

export default Tests
