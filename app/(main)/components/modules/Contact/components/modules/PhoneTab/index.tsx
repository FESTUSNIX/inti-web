import React from 'react'
import PhoneInput from '../../elements/PhoneInput'
import TimeSelect from '../../elements/TimeSelect'

type Props = {
	phoneNumber: string
	setPhoneNumber: React.Dispatch<React.SetStateAction<string>>
	startTime: {
		hour: string
		minutes: string
	}
	setStartTime: React.Dispatch<
		React.SetStateAction<{
			hour: string
			minutes: string
		}>
	>
	endTime: {
		hour: string
		minutes: string
	}
	setEndTime: React.Dispatch<
		React.SetStateAction<{
			hour: string
			minutes: string
		}>
	>
}

const PhoneTab = ({ phoneNumber, setPhoneNumber, startTime, setStartTime, endTime, setEndTime }: Props) => {
	return (
		<div>
			<PhoneInput value={phoneNumber} setValue={setPhoneNumber} />

			<div className='mt-6'>
				<p className='mb-2 text-neutral-200'>Najlepszy czas na rozmowe</p>
				<div className='flex flex-col gap-2 md:flex-row'>
					<TimeSelect value={startTime} setValue={setStartTime} label='Od' />
					<TimeSelect value={endTime} setValue={setEndTime} label='Do' />
				</div>
			</div>
		</div>
	)
}

export default PhoneTab
