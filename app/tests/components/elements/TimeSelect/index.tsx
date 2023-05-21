'use client'

import React, { useState } from 'react'
import Label from './components/Label'
import TimeMenu from './components/TimeMenu'

type Props = {
	value: { hour: string; minutes: string }
	setValue: React.Dispatch<
		React.SetStateAction<{
			hour: string
			minutes: string
		}>
	>
	label: string
}

const TimeSelect = ({ value, setValue, label }: Props) => {
	const [active, setActive] = useState(false)

	return (
		<div className='relative'>
			<Label active={active} setActive={setActive} value={value} label={label} />

			<TimeMenu setValue={setValue} value={value} active={active} setActive={setActive} />
		</div>
	)
}

export default TimeSelect
