'use client'

import React, { useEffect, useRef, useState } from 'react'
import './styles.css'
import TimeSelect from './components/modules/TimeSelect'
import Field from './components/modules/Field'

const Tests = () => {
	const [val, setVal] = useState('')

	return (
		<div className='wrapper flex min-h-screen flex-col items-center justify-center'>
			<TimeSelect />

			{/* <Field value={val} setValue={setVal} label='Your name' /> */}
		</div>
	)
}

export default Tests
