import React from 'react'
import Label from '../../elements/Label'
import TimeMenu from '../../elements/TimeMenu'

type Props = {}

const TimeSelect = (props: Props) => {
	return (
		<div className='relative'>
			<Label />

			<TimeMenu />
		</div>
	)
}

export default TimeSelect
